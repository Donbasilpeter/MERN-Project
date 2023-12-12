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
      res.send({'list' : users });
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
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
  
  

  exports.updateUser = async (req, res) => {
    try {
      // Implement logic to update a user in the database
      const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body, { new: true });
      res.send({'status' : "success", data :{ user: updatedUser }});
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      // Implement logic to delete a user from the database
      await User.findByIdAndDelete(req.body.id);
      res.send({res:"success"})
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };