import { AppBar, Box, Container, Toolbar, InputBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Header() {

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box mr={10}>
                            <img src="https://github.com/meabhisingh/netflix/blob/master/src/logo.png?raw=true" alt='Netflix Logo' height={30} />
                        </Box>
                        <Box width="100%" marginRight="25vmax" display="flex" justifyContent="space-between" alignItems="center">
                            <Link to="/tvshows" style={{ textDecoration: 'none', color: 'white' }}>TV Shows</Link>
                            <Link to="/movies" style={{ textDecoration: 'none', color: 'white' }}>Movies</Link>
                            <Link to="/recentlyadded" style={{ textDecoration: 'none', color: 'white' }}>Recently Added</Link>
                            <Link to="/mylist" style={{ textDecoration: 'none', color: 'white' }}>My List</Link>
                        </Box>
                        <Box>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Header;