import React from 'react';
import { Box, Grid } from '@mui/material';

import Note from '../../components/note/note';

const dummyNotes = [
  { id: 1, title: 'Note 1', content: 'This is the content of note 1.' },
  { id: 2, title: 'Note 2', content: 'This is the content of note 2.' },
  { id: 3, title: 'Note 3', content: 'This is the content of note 3.' },
  { id: 4, title: 'Note 4', content: 'This is the content of note 4.' },
  { id: 5, title: 'Note 5', content: 'This is the content of note 5.' },
  { id: 6, title: 'Note 6', content: 'This is the content of note 6.' },
];

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {dummyNotes.map((note) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
            <Note note={note} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Home;
