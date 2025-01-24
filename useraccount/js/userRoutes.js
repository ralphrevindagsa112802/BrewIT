// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Fetch user details
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Logout (clears the session or token)
router.post('/logout', (req, res) => {
  // Assuming you're using a session
  req.session.destroy((err) => {
    if (err) return res.status(500).send('Logout failed');
    res.send('Logged out successfully');
  });
});

module.exports = router;
