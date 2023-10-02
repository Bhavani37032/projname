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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/otp')
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
            background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
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
      <Link href="/resetpassword" variant="body2" sx={{ color: "#ad1982" }}>
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
    Next
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