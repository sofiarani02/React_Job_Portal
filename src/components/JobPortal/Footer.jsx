import * as React from 'react';
import Box from '@mui/material/Box';


export default function SimpleBottomNavigation() {

  return (
    <Box sx={{ width: '110%', backgroundColor: '#4169E1', color: 'white', position: 'fixed', bottom: 0, marginLeft:'-90px', marginRight:'-90px'}}>
      
      <Box sx={{ textAlign: 'center', padding: '8px', fontSize: '14px', fontFamily: 'Arial, sans-serif' }}>
        All Rights Reserved | Copyrights 2024
      </Box>
    </Box>
  );
}
