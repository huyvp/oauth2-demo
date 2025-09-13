import { Alert, Box, Card, CircularProgress, Typography, Snackbar, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../services/localStorageService';
import Header from './header/Header';

export default function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [password, setPassword] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackType, setSnackType] = useState("error");

  const getUserDetails = async (accessToken) => {
    const response = await fetch(`http://localhost:9001/identity/users/myInfo`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    const data = await response.json();

    console.log(data.result);

    setUserDetails(data.result);
  };

  const createNewPassword = (event) => {
    event.preventDefault();

    const payload = JSON.stringify({
      password: password
    })

    fetch("http://localhost:9001/identity/users/create-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: payload,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.code != 2000) throw new Error(data.message);
        getUserDetails(getToken());
        showSuccess(data.result);
      })
      .catch((error) => {
        showError(error.message);
      });
  }
  const handleCloseSnackBar = (reason) => {
    if (reason === "clickaway") return;
    setSnackBarOpen(false);
  };

  const showError = (message) => {
    setSnackType("error");
    setSnackBarMessage(message);
    setSnackBarOpen(true);
  };

  const showSuccess = (message) => {
    setSnackType("success");
    setSnackBarMessage(message);
    setSnackBarOpen(true);
  };

  useEffect(() => {
    const accessToken = getToken();

    if (!accessToken) navigate('/login');
    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <>
      <Header></Header>
      <Snackbar
        open={snackBarOpen}
        onClose={handleCloseSnackBar}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
      {userDetails ? (
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          height='100vh'
          bgcolor={'#f0f2f5'}
        >
          <Card
            sx={{
              minWidth: 400,
              maxWidth: 500,
              boxShadow: 4,
              borderRadius: 4,
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img src={userDetails.avatar} alt={`${userDetails.givenName}'s profile`} className='profile-pic' />
              <p>Welcome back</p>
              <h1 className='name'>{userDetails.familyName} {userDetails.givenName}</h1>
              <p className='email'>{userDetails.email}</p>{' '}

              {userDetails.noPassword && (
                <Box
                  component='form'
                  onSubmit={createNewPassword}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <Typography>Do you want to create password?</Typography>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Create password
                  </Button>
                </Box>
              )}
            </Box>
          </Card>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
          <Typography>Loading ...</Typography>
        </Box>
      )}
    </>
  );
}
