import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ComputerIcon from '@mui/icons-material/Computer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 36,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  color: '#eab676',
                  textDecoration: 'none',
                },
              }}
            >
              <ComputerIcon sx={{ mr: 1.5, mt: 0.5 }} />
              CodingTec
            </Typography>
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 600, fontSize: 20, color: 'inherit', textDecoration: 'none' }}
                onClick={handleClick}
              >
                CATEGORIAS
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/category/electronics">Electronica</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/category/jewelery">Joyeria</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/category/women's clothing">Ropa de mujer</MenuItem>
              </Menu>
            </div>
            <Button
              id="btn-blog"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 600, fontSize: 20, color: 'inherit', textDecoration: 'none' }}
            >
              BLOG
            </Button>
            <CartWidget />
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;