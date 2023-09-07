import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography sx={{ color: "white" }}>
                GUANTES
            </Typography>
            <Button sx={{ color: 'white' }}>
                Home
            </Button>
            <Button sx={{ color: 'white' }}>
                Categorias
            </Button>
            <Button sx={{ color: 'white' }}>
                Productos
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;
