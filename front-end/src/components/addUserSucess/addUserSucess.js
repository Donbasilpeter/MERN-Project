import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const excludedKeys = ['_id', '__v']; // Add keys you want to exclude from the list

const UserAddedSuccessfully = () => {
  const user = useSelector((state) => state.user.currentUser);

  const filteredUserEntries = Object.entries(user).filter(([key]) => !excludedKeys.includes(key));

  return (
    <Container mt={5} maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom color="primary">
        User Added Successfully
      </Typography>

      <Typography variant="body1" align="center" paragraph color="textSecondary">
        The following user has been added successfully:
      </Typography>

      <List>
        {filteredUserEntries.map(([key, value]) => (
          <ListItem key={key} sx={{ py: 1 }}>
            <ListItemText
              primary={
                <Typography variant="subtitle1" color="primary">
                  {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
                </Typography>
              }
              secondary={value}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="body1" align="center" mt={4}>
        <Button variant="contained" color="primary" href="/">
          Go back to the Users List
        </Button>
      </Typography>
    </Container>
  );
};

export default UserAddedSuccessfully;
