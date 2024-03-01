// src/components/Note.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Note = ({ note }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/notes/${note.id}`, { state: { note } });
  };

  return (
    <Card variant="outlined" sx={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={handleClick}>
      <CardContent sx={{ overflow: 'auto' }}>
        <Typography variant="h5" component="div" gutterBottom>
          {note.title}
        </Typography>
        <Typography variant="body2">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Note;
