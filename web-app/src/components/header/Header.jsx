import { AppBar, Toolbar } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
}
