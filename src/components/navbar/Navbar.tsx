import React from 'react';
import './navbar.css';
import { AppBar } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const NavBar = () => {
  return (
    <>
      <AppBar
        sx={{ boxShadow: '1px 1px #EBEBEB', backgroundColor: '#fff', color: 'black' }}
        position="static"
        enableColorOnDark>
        {' '}
        <div className="navbar">
          <div className="heading">Where in the world?</div>
          <div>
            <DarkModeOutlinedIcon fontSize="small" />{' '}
            <span style={{ verticalAlign: 'top', fontWeight: 'bold', fontSize: 'small' }}>
              Dark Mode
            </span>
          </div>
        </div>
      </AppBar>{' '}
    </>
  );
};

export default NavBar;
