import { Router } from 'express';
import StatusCode from 'status-code-enum';
import { UserModel } from '../models/user';

const router = Router();

// Register
// Allow users to register for a new account
// Payload: { username, email, password }
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(StatusCode.ClientErrorBadRequest).send('Invalid data');

  if (
    username.length < 4 ||
    username.length > 24 ||
    !/^[a-zA-Z0-9-_]+$/.test(username)
  ) {
    console.log(`Error registering user ${username}: Invalid username length`);
    return res
      .status(StatusCode.ClientErrorBadRequest)
      .send(
        'Username must be between 4 and 24 characters and contain no special characters'
      );
  }

  if (password.length < 6) {
    console.log(`Error registering user ${username}: Invalid password length`);
    return res
      .status(StatusCode.ClientErrorBadRequest)
      .send('Password must be at least 6 characters');
  }

  if (
    await UserModel.findOne({ username: { $regex: new RegExp(username, 'i') } })
  )
    return res.status(StatusCode.ClientErrorConflict).send('User exists');

  try {
    // await registerUser(username, password);
    console.log(`User ${username} registered`);
    return res.status(StatusCode.SuccessOK).send('User registered');
  } catch (err) {
    console.log(`Error registering user ${username}: ${err}`);
    return res.status(StatusCode.ClientErrorBadRequest).send('Invalid data');
  }
});

// Login
// Allow users to login to an existing account and provides an access token
// Payload: { username, password }
router.post('/login', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
});

// Logout
// Allow users to logout of their account and invalidate their access token
// Authentication: Requires a valid access token
router.post('/logout', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
});

// Profile
// Allow users to view their profile information
// Authentication: Requires a valid access token
router.get('/profile', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
});

// Change password
// Allow users to change their password
// Authentication: Requires a valid access token
// Payload: { oldPassword, newPassword }
router.post('/change-password', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
});

// Password reset
// Allow users to request a password reset (sends an email with a reset link)
// Payload: { email }

// Password reset confirmation
// Allow users to confirm a password reset
// Payload: { email }

// Delete account
// Allow users to delete their account
// Authentication: Requires a valid access token
router.delete('/delete-account', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
});
