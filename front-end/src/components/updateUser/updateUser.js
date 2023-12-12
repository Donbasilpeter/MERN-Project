import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { updateUser } from '../../services/services.js';
import { setCurrentUser } from '../../reduers/user.js';

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.user.currentUser);

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

  useEffect(() => {
    setFormData(currentData)
  }, [currentData]);
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateUser(formData)
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
        Update User
      </Typography>

  <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="dob"
              type="date"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.dob}
            />
          </Grid>

          {/* Add similar Grid items for other fields */}
          {/* Address 1 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address 1"
              name="address1"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.address1}
            />
          </Grid>
          {/* Address 2 */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address 2"
              name="address2"
              onChange={handleInputChange}
              fullWidth
              value={formData.address2}
            />
          </Grid>
          {/* City */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.city}
            />
          </Grid>
          {/* Postal Code */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code"
              name="postalCode"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.postalCode}
            />
          </Grid>
          {/* Country */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              name="country"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.country}
            />
          </Grid>
          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              onChange={handleInputChange}
              type="tel"
              fullWidth
              required
              value={formData.phoneNumber}
            />
          </Grid>
          {/* Email */}
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              onChange={handleInputChange}
              fullWidth
              required
              value={formData.email}
            />
          </Grid>
          {/* User Notes */}
          <Grid item xs={12}>
            <TextField
              label="User Notes"
              name="userNotes"
              multiline
              rows={4}
              fullWidth
              onChange={handleInputChange}
              value={formData.userNotes}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Update User
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdateUserForm;
