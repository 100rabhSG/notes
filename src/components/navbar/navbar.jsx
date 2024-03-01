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

    const handleClick = () => {
      navigate('/')
    }

  return (
    <AppBar position="static" sx={{ bgcolor: '#efde78' }}>
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
        <Typography variant="h4" component="div" sx={{ pr: 15, fontWeight: 'bold', flexGrow: 1, textAlign: 'center', color: '#000000', cursor: 'pointer'}} onClick={handleClick}>
          Notes App   
        </Typography>
        
        {/* Profile Icon and Sign In Button */}
        <Box sx={{ color: '#343d3d'}}>
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
