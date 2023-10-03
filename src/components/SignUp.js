import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PasswordChecklist from "react-password-checklist";
import { Card, CardContent } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ReCAPTCHA from "react-google-recaptcha";




const defaultTheme = createTheme();

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setShowMatchPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  function handleSetPassword(event) {
    setPassword(event.target.value);
  }
  function handleSetMatchPassword(event) {
    setMatchPassword(event.target.value);
  }

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

    if (!recaptchaValue) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
      // sx={{
      //   marginTop: '16px',      // Add spacing at the top of the form
      //   padding: '16px',        // Add padding inside the box
      //   backgroundColor: 'white',// Set the background color of the box
      //   borderRadius: '8px',    // Add rounded corners to the box
      //   border: '1px solid #ccc',
      // }}
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
            <Card sx={{
              //background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
              boxShadow: 3,
              padding: '16px', // Add padding to the card content
              maxWidth: '400px', // Set a maximum width for the card
              margin: '0 auto', // Center the card horizontally
            }}
            >
              <CardContent>
                
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ textAlign: 'left', fontWeight: 'bold' }}
                >
                  Create an account
                </Typography>
                <Typography style={{ textAlign: 'left' }}>
                  Sign up now to get started with an account
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
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={handleSetPassword}
                        autoComplete="new-password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Confirm Password"
                        label="Confirm Password"
                        type={showMatchPassword ? 'text' : 'password'} // Toggle visibility for match password
                        id="ConfirmPassword"
                        value={matchPassword}
                        onChange={handleSetMatchPassword}
                        autoComplete="new-password"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowMatchPassword(!showMatchPassword)}
                                edge="end"
                              >
                                {showMatchPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <PasswordChecklist
                      rules={["capital", "match", "specialChar", "minLength", "number"]}
                      minLength={8}
                      value={password}
                      valueAgain={matchPassword}
                      style={{ fontSize: '12px' }}
                    />

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

                  </Grid>

                  <ReCAPTCHA
  sitekey="6LdsJG0oAAAAAOXca_AclGN8AwpXMQDbw0NnnIBI"
  onChange={(value) => setRecaptchaValue(value)}
  style={{ marginTop: '16px' }}
/>

                  <Button
                    type="submit"
                    fullWidth  // Make the button take the full width of its container
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#0c7f88",
                      display: 'flex',
                      justifyContent: 'center',
                      '&:hover': {
                        backgroundColor: "rgba(12, 127, 136, 0.9)", // Change the color when hovering
                      },
                    }}
                    // disabled={recaptchaValue === null}
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
              </CardContent>
            </Card>
          </Box>
          
        </Container>
      </ThemeProvider>

    </Box>
  );
}