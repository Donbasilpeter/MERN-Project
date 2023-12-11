import React from 'react';
import { Container, Typography, Paper, Button, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '5rem' }}>
      <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to User Management
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph>
          Explore the options below to efficiently manage users in our system.
        </Typography>

        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '2rem' }}>
          <Grid item>
            <Button variant="contained" color="primary" size="large" href="/add">
              Add New User
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="large" href="/list">
              List All Users
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
