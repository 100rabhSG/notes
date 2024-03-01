// src/components/NoteDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const NoteDetails = () => {
  const location = useLocation();
  const { note } = location.state;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {note.title}
      </Typography>
      <Typography variant="body1">
        {note.content}
      </Typography>
    </Box>
  );
};

export default NoteDetails;
