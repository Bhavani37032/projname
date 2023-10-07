import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import axios from "axios";



const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    try {
      const response = await axios.get(
        `http://localhost:8080/api/customers?email=${email}&password=${password}`
      );

      // Check if there's a matching user in the response
      const users = response.data;

      const matchingUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchingUser) {
        navigate('/otp'); // Redirect to the home page on successful login
      } else {
        alert('Invalid Credentials!! Please verify');
      }
    } catch (error) {
      console.error('Error validating user:', error);
      alert('An error occurred while validating user.');
    }

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
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
                Log in to your account
              </Typography>
              <Typography style={{ textAlign: 'left' }}>
                Welcome back, please enter your details
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
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
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/phonelogin" variant="body2" sx={{ color: "#ad1982" }}>
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#0c7f88",
                    display: 'flex',
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: "rgba(12, 127, 136, 0.9)",
                    },
                  }}
                >
                  Login
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="/signup" variant="body2" sx={{ color: "#ad1982" }}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>

            </CardContent>
          </Card>
        </Box>

        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}