const User = require('../models/user');

exports.home = async (req, res) => {
  try {
    res.render('home');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllUsers = async (req, res) => {
    try {
      // Implement logic to retrieve all users from the database
      const users = await User.find();
      res.render('list', { users });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };

exports.getAddUserForm = (req, res) => {
  // Render a simple response for adding a user
  res.render('addUser');
};

exports.addUser = async (req, res) => {
    try {
      // Implement logic to add a user to the database
      const newUser = await User.create(req.body);
      res.send({'status' : "success", data :{ user: newUser }});
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  

  exports.getUpdateUserForm = async (req, res) => {
    try {
      // Implement logic to retrieve user details for updating
      const user = await User.findById(req.params.id);
  
      // Format user data before rendering the Pug template
      const formattedUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob.toISOString().split('T')[0], // Format date to 'YYYY-MM-DD'
        address1: user.address1,
        address2: user.address2,
        city: user.city,
        postalCode: user.postalCode,
        country: user.country,
        phoneNumber: user.phoneNumber,
        email: user.email,
        userNotes: user.userNotes,
      };
      res.render('updateUser', { user: formattedUser });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  

  exports.updateUser = async (req, res) => {
    try {
      // Implement logic to update a user in the database
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.render('updateUserSuccess', { user: updatedUser });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      // Implement logic to delete a user from the database
      await User.findByIdAndDelete(req.params.id);
      res.render('deleteUserSuccess');
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };