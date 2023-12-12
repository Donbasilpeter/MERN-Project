import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If using React Router

const UserDeletedSuccessfully = () => {
  return (
    <div className="container mt-5">
      <Card className="text-center">
        <CardContent>
          <Typography variant="h1" component="div" gutterBottom>
            User Deleted Successfully
          </Typography>
          <Typography variant="body1" paragraph>
            The user has been deleted successfully.
          </Typography>
          {/* Use Link from react-router-dom if you're using React Router */}
          <Button component={Link} to="/list" variant="contained" color="primary">
            Go back to the Users List
          </Button>
          {/* If not using React Router, you can use a regular anchor tag */}
          {/* <Button href="/" variant="contained" color="primary">
            Go back to the Users List
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDeletedSuccessfully;
