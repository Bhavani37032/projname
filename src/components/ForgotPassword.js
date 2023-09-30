import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the forgot password form here
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '8px',
        }}
      >
        {/* <Typography component="h1" variant="h5">
          Forgot Password
        </Typography> */}
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem',backgroundColor: "#0c7f88", }}
          >
            Send Reset Email
          </Button>
          <Grid container justifyContent="flex-end" style={{ marginTop: '1rem' }}>
            <Grid item>
              <Link href="/signin" variant="body2" sx={{ color: "#ad1982" }}>
                Back to Sign In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
