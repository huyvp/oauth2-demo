import { Box, Button, Card, CardActions, CardContent, Divider, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useEffect, useState } from 'react';
import { getToken } from '../services/localStorageService';
import { useNavigate } from 'react-router-dom';
import { OAuthConfig } from '../configurations/googleApiConfig'

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken) navigate('/');
  }, [navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleClick = () => {
    const callbackUrl = OAuthConfig.redirectUri;
    console.log(callbackUrl);
    const authUrl = OAuthConfig.authUri;
    const googleClientId = OAuthConfig.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;
    window.location.href = targetUrl;
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor={"#f0f2f5"}
      >
        <Card
          sx={{
            minWidth: 250,
            maxWidth: 400,
            boxShadow: 4,
            borderRadius: 4,
            padding: 4,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Welcome to Devtetia
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" flexDirection="column" width="100%" gap="25px">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Login
              </Button>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleClick}
                fullWidth
                sx={{ gap: "10px" }}
              >
                <GoogleIcon />
                Continue with Google
              </Button>
              <Divider></Divider>
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
              >
                Create an account
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
