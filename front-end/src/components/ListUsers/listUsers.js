import React, { useEffect } from 'react';
import {
    Container,
    Typography,
    List,
    ListItem,
    Button,
    Grid,
    Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, deleteUser } from '../../services/services';
import { setUserList,setCurrentUser } from '../../reduers/user';

const UserList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.userList);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersList = await getUser();
                dispatch(setUserList(usersList));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [dispatch]);
    const getDataById = (dataArray, targetId) => {
        return dataArray.find(item => item._id === targetId);
      };

    const handleUpdateClick = (userId) => {

        dispatch(setCurrentUser(getDataById(users,userId)));
        
        navigate(`/update/${userId}`);
    };

    const handleDeleteClick = async (userId) => {
        const result = await deleteUser(userId)
        navigate(`/delete`);
    };

    return (
        <Container mt={5}>
            <Typography variant="h2" align="center">
                User List
            </Typography>

            {users ? (
                <List sx={{ mt: 3 }}>
                    {users.map((user) => (
                        <Paper key={user._id} elevation={3} sx={{ mb: 3, p: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {user.firstName} {user.lastName}
                                    </Typography>
                                    <Typography>
                                        <strong>Date of Birth:</strong> {user.dob}
                                    </Typography>
                                    <Typography>
                                        <strong>Address 1:</strong> {user.address1}
                                    </Typography>
                                    <Typography>
                                        <strong>Address 2:</strong> {user.address2}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography>
                                        <strong>City:</strong> {user.city}
                                    </Typography>
                                    <Typography>
                                        <strong>Postal Code:</strong> {user.postalCode}
                                    </Typography>
                                    <Typography>
                                        <strong>Country:</strong> {user.country}
                                    </Typography>
                                    <Typography>
                                        <strong>Phone Number:</strong> {user.phoneNumber}
                                    </Typography>
                                    <Typography>
                                        <strong>Email:</strong> {user.email}
                                    </Typography>
                                    <Typography>
                                        <strong>User Notes:</strong> {user.userNotes}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container justifyContent="flex-end" mt={1}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="small"
                                    onClick={() => handleUpdateClick(user._id)}
                                    sx={{ mx: 1 }}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => handleDeleteClick(user._id)}
                                    sx={{ mx: 1 }}
                                >
                                    Delete
                                </Button>
                            </Grid>

                        </Paper>
                    ))}
                </List>
            ) : (
                <div className="alert alert-info text-center mt-3">
                    <Typography variant="body1">No users found.</Typography>
                </div>
            )}
        </Container>
    );
};

export default UserList;
