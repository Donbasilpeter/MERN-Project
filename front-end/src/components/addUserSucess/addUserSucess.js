import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const UserAddedSuccessfully = ({ user }) => {
  return (
    <Container mt={5}>
      <Typography variant="h1" align="center" gutterBottom>
        User Added Successfully
        {user}
      </Typography>

      <Typography variant="p" align="center" paragraph>
        The following user has been added successfully:
      </Typography>


      <Typography variant="p" align="center" mt={4}>
        <Button variant="contained" color="primary" href="/">
          Go back to the Users List
        </Button>
      </Typography>
    </Container>
  );
};

export default UserAddedSuccessfully;
