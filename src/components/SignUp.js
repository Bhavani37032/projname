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
// import PasswordChecklist from "react-password-checklist";
import { Card, CardContent } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUp() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { register, handleSubmit, watch, formState: { errors }, } = useForm({
    mode:'onChange'
  });


  // function handleSetPassword(event) {
  //   setPassword(event.target.value);
  // }
  // function handleSetConfirmPassword(event) {
  //   setConfirmPassword(event.target.value);
  // }

  

  const onSubmit = async (data) => {
    if (recaptchaValue) {
      try {
        const response = await axios.post('http://localhost:8080/api/customers', data);
        console.log('Form data sent successfully:', response.data);
        // You can add further actions or redirections upon successful submission
      } catch (error) {
        console.error('Error sending form data:', error);
        // Handle errors here, e.g., show an error message to the user
      }
    } else {
      // Set an error message for the CAPTCHA field
      setRecaptchaValue(null); // Reset the CAPTCHA value
    }
  };

  const password = watch('password')


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

                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
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
                        {...register("firstName", { required: "First Name is required" })}
                      />
                      {errors.firstName?.message && (
                        <Typography variant="caption" color="error">
                          {errors.firstName?.message}
                        </Typography>
                      )}

                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        {...register("lastName", { required: "Last Name is required" })}
                      />
                      {errors.lastName?.message && (
                        <Typography variant="caption" color="error">
                          {errors.lastName?.message}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter email in valid format" } })}
                      />
                      {errors.email?.message && (
                        <Typography variant="caption" color="error">
                          {errors.email?.message}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        // name="password"
                        // label="Password"
                        type={showPassword ? 'text' : 'password'}
                        // id="password"
                        // value={password}
                        // onChange={handleSetPassword}
                        // autoComplete="new-password"
                        placeholder='Password'
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

                        {...register("password", { required: "Password is required", 
                         pattern: { 
                          value: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
                          message: "Password should contain atleast an uppercase letter, a lowercase letter, a number and a special character" 
                        },
                        minLength:{
                          value:8,
                          message:"Minimum required length is 8"
                        },
                        })}
                      />
                       {errors.password?.message && (
                        <Typography variant="caption" color="error">
                          {errors.password?.message}
                        </Typography>
                      )}  

                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        // name="confirmPassword"
                        // label="Confirm Password"
                        type={showConfirmPassword ? 'text' : 'password'} // Toggle visibility for match password
                        // id="confirmPassword"
                        // value={confirmPassword}
                        // onChange={handleSetConfirmPassword}
                        // autoComplete="new-password"
                        placeholder='Confirm Password'
                        onPaste={(e)=>{
                          e.preventDefault()
                          return false;
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                edge="end"
                              >
                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        {...register("confirmPassword", { required: 'Confirm password is required',
                    validate: (value) =>
                    value === password || "Password and confirm passsword should match",
                 })}
                      />
                      {errors.confirmPassword?.message && (
                        <Typography variant="caption" color="error">
                          {errors.confirmPassword?.message}
                        </Typography>
                      )}  
                    </Grid>
                    {/* <PasswordChecklist
                      rules={["capital", "match", "specialChar", "minLength", "number"]}
                      minLength={8}
                      value={password}
                      valueAgain={matchPassword}
                      style={{ fontSize: '12px' }}
                      
                    /> */}

                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="accNumber"
                        label="Account Number"
                        id="accNumber"
                        autoComplete="account number"
                        {...register("accNumber", { required: "Account Number is required", pattern: { value:/^[0-9]{9,18}$/ , message: "Enter valid account number" } })}
                      />
                      {errors.accNumber?.message && (
								<Typography variant="caption" color="error">
									{errors.accNumber?.message}
								</Typography>
							)}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="phnNumber"
                        label="Mobile Number"
                        id="phnNumber"
                        autoComplete="phnNumber"
                        {...register("phnNumber", { required: "Mobile Number is required", pattern: { value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ , message: "Enter valid mobile number" } })}
                      />
                      {errors.phnNumber?.message && (
								<Typography variant="caption" color="error">
									{errors.phnNumber?.message}
								</Typography>
							)}
                    </Grid>

                  </Grid>

                  <ReCAPTCHA
                    sitekey="6LdsJG0oAAAAAOXca_AclGN8AwpXMQDbw0NnnIBI"
                    onChange={(value) => setRecaptchaValue(value)}
                    style={{ marginTop: '16px' }}
                  />
                  {recaptchaValue === null && (
                    <Typography variant="caption" color="error" sx={{ marginTop: '8px' }}>
                      Please complete the reCAPTCHA.
                    </Typography>
                  )}

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
                      <Link href="/login" variant="body2" sx={{ color: "#ad1982" }}>
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