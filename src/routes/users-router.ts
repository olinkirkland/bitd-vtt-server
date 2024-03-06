import { Router } from 'express';
import StatusCode from 'status-code-enum';

const router = Router();

// Register
// Allow users to register for a new account
// Payload: { username, email, password }
router.post('/register', (req, res) => {
  res.status(StatusCode.SuccessOK).send();
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
