import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#4169E1', color: 'white', position: 'fixed', bottom: 0, marginLeft:'-32px' }}>
      
      <Box sx={{ textAlign: 'center', padding: '8px', fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>
        All Rights Reserved | Copyrights 2024
      </Box>
    </Box>
  );
}
