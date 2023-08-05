import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {purple } from '@mui/material/colors';
import {createTheme, ThemeProvider} from "@mui/material";
import styles from './DashboardMenuDropDown.module.css'
import {Link} from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            main: '#E0C2FF'
        }
    },
    typography: {
        button: {
            fontSize: '100%',
        },
    },
});





const DashboardMenuDropDown = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={styles.selectMenu}>
            <ThemeProvider theme={theme}>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    background: '#18ffff',
                    color: 'gray',
                    width: '75%',
                }}
            >
                Menu
            </Button>
            </ThemeProvider>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >  <Link className={styles.liRemoveDecoration} to="/">
                    Home
                </Link></MenuItem>
                <MenuItem ><Link className={styles.buttonChoices} to="/Department">
                    Department
                </Link></MenuItem>
                <MenuItem ><Link className={styles.buttonChoices} to="/Resources">
                    Resourcess
                </Link></MenuItem>
            </Menu>
        </div>
    );
}

export default DashboardMenuDropDown;