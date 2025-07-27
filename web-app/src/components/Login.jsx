import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        bgcolor='#f0f2f5'
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
            <Typography variant='h5' component='h1' gutterBottom>
              Welcome
            </Typography>
            <Box component='form' onSubmit={() => { }} sx={{ mt: 2 }}>
              <TextField
                label='Username'
                variant='outlined'
                fullWidth
                margin='normal'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label='Password'
                type='password'
                variant='outlined'
                fullWidth
                margin='normal'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Box display='flex' flexDirection='column' width='100%' gap='25px'>
              <Button >
                Login
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
