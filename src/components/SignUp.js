import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
    const accNumber = data.get('accNumber');
    const ifscCode = data.get('ifscCode');

    if (!firstName.trim()) {
      alert('First name cannot be empty.');
      return;
    }

    if (!lastName.trim()) {
      alert('Last name cannot be empty.');
      return;
    }
    
    if (!isEmailValid(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isPasswordValid(password)) {
      alert('Please enter a valid password with at least 8 characters.');
      return;
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
  sx={{
    marginTop: '16px',      // Add spacing at the top of the form
    padding: '16px',        // Add padding inside the box
    backgroundColor: 'white',// Set the background color of the box
    borderRadius: '8px',    // Add rounded corners to the box
    border: '1px solid #ccc',
  }}
>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: 'white',             // Text color
              backgroundColor: '#5a287d', // Background color
              width: '100%',              // Full width
              textAlign: 'center',        // Center-align the text
              padding: '8px',            // Add some padding for better visual
            }}
          >
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="accNumber"
                  label="Account Number"
                  id="accNumber"
                  autoComplete="account number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="ifscCode"
                  label="IFSC Code"
                  id="ifscCode"
                  autoComplete="ifscCode"
                />
              </Grid>
            
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" style ={{
                    color: "#5a287d",
                  }}/>}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth  // Make the button take the full width of its container
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#0c7f88",
                display: 'flex',
                justifyContent: 'center', // Center-align the button horizontally
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2" sx={{ color: "#ad1982" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </Box>
  );
}