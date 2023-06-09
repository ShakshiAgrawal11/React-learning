import * as React from 'react';
import {AppBar,Box,Toolbar,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Heading() {
  return (
    <Box sx={{ flexGrow: 1, width: "vw" }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            Trello
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
