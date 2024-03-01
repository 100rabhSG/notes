// Import necessary components from MUI
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/signin');
    }

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Search Box */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search notes..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        {/* App Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Notes App
        </Typography>
        
        {/* Profile Icon and Sign In Button */}
        <Box>
          <IconButton size="large" edge="end" color="inherit">
            <AccountCircle fontSize="large" />
          </IconButton>
          <Button color="inherit" onClick={handleSignIn}>Sign In</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
