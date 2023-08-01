import { Adb } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = ['TV Shows', 'Movies', 'Recently Added', 'My List'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box mr={10}>
                        <img src="https://github.com/meabhisingh/netflix/blob/master/src/logo.png?raw=true" alt='Netflix Logo' height={30} />
                    </Box>
                    <Link to="/tvshows" style={{ textDecoration: 'none', color: 'white', marginRight: '5%' }}>TV Shows</Link>
                    <Link to="/movies" style={{ textDecoration: 'none', color: 'white', marginRight: '5%' }}>Movies</Link>
                    <Link to="/recentlyadded" style={{ textDecoration: 'none', color: 'white', marginRight: '5%' }}>Recently Added</Link>
                    <Link to="/mylist" style={{ textDecoration: 'none', color: 'white', marginRight: '5%' }}>My List</Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;