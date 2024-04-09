import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { auth } from '../../firebase';

function PrepareLink() {
  return (
    <Link to="/prepare" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>Prepare</Button>
    </Link>
  );
}

function PracticeLink() {
  return (
    <Link to="/practice" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>Practice</Button>
    </Link>
  );
}

function JobsLink() {
  return (
    <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>Jobs</Button>
    </Link>
  );
}

function HiringChallengesLink() {
  return (
    <Link to="/hiring-challenges" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>Hiring Challenges</Button>
    </Link>
  );
}

function Signup() {
  return (
    <MenuItem>
      <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography textAlign="center">Sign up</Typography>
      </Link>
    </MenuItem>
  );
}

function Profile() {
  return (
    <MenuItem>
      <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography textAlign="center">Profile</Typography>
      </Link>
    </MenuItem>
  );
}

function Logout({ onLogout }) {
  const handleLogoutClick = () => {
    // Your logout logic
    // ...

    // Call the onLogout callback
    onLogout();
  };

  return (
    <MenuItem onClick={handleLogoutClick}>
      <Typography textAlign="center">Logout</Typography>
    </MenuItem>
  );
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userEmail, setUserEmail] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    // Set user email when the user menu is opened
    setUserEmail(auth.currentUser ? auth.currentUser.email : null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignupClick = () => {
    // Your signup logic
    // ...
    handleCloseUserMenu(); // Close the user menu after signup
  };

  const handleLogout = async () => {
    // Clear the user authentication state (logout)
    await auth.signOut();
  
    // Clear the user email when the user logs out
    setUserEmail(null);
  
    // Close the user menu after logout
    handleCloseUserMenu();
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUserEmail(auth.currentUser ? auth.currentUser.email : null);
    }, 50); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar position="fixed" style={{ top: 0, left: 0, right: 0, zIndex: 999, backgroundColor: '#4169E1', color: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="/jobportal" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              JobNexa
            </Typography>
          </Link>

          {/* Navigation Menu for Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <PrepareLink />
              <PracticeLink />
              <JobsLink />
              <HiringChallengesLink />
            </Menu>
          </Box>

          {/* Navigation Buttons for Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <PrepareLink />
            <PracticeLink />
            <JobsLink />
            <HiringChallengesLink />
          </Box>

          {auth.currentUser ? (
            // Display Avatar after login
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar style={{ color: 'black', backgroundColor: 'white' }}>
                    {userEmail ? userEmail[0].toUpperCase() : ''}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Profile />
                <Logout onLogout={handleLogout} />
              </Menu>
            </Box>
          ) : (
            // Display Signup button before sign in
            <Box sx={{ flexGrow: 0 }}>
              <MenuItem onClick={handleSignupClick}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography textAlign="center">Sign up</Typography>
                </Link>
              </MenuItem>
              
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
