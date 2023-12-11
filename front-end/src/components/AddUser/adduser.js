import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Container, Typography, TextField, Button, TextareaAutosize, Grid } from '@mui/material';
import {addUser} from '../../services/services.js';
import { setCurrentUser } from '../../reduers/user.js';


const AddUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    userNotes: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addUser(formData)
    console.log(result)

    if(result){
      const info = result.user
      dispatch(setCurrentUser(info))
      navigate('/success');
    }


  };
  return (
    <Container sx={{ mt: 5, mb: 4 }}>
      <Typography variant="h2" align="center">
        Add User
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" name="firstName" onChange={handleInputChange}  fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" name="lastName" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField  name="dob" type="date" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address 1" name="address1" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Address 2" name="address2" onChange={handleInputChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" name="city" fullWidth onChange={handleInputChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Postal Code" name="postalCode" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Country" name="country" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" name="phoneNumber" onChange={handleInputChange} type="tel" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" name="email" type="email" onChange={handleInputChange} fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="User Notes"
              name="userNotes"
              multiline
              rows={4}
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add User
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddUserForm;
