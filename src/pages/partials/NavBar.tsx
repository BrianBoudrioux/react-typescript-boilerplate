import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from "react-router-dom";
import { logout } from "../../store/user.reducer";
import { useDispatch } from "react-redux";
import { userServices } from '../../services/index';

const NavBar = () => {
    const [drawer, setDrawer] = useState(false);
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        setDrawer(!drawer);
    }

    const exit =  async () => {
        await userServices.logout()
        dispatch(logout());
        toggleDrawer();
    }


    return (
        <div>
            <AppBar position="static" >
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <IconButton color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        React Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                open={drawer}
                onClose={toggleDrawer}
                style={{ width: 600 }}
            >
                <List>
                    <ListItem>
                        <Link to="/">
                            <Button color="secondary" onClick={exit}>
                                <ExitToAppIcon /> Logout
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/dashboard">
                            <Button color="primary" onClick={toggleDrawer}>
                                <DashboardIcon /> Dashboard
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
export default NavBar;