import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const Menu = () => {
	return (
		<AppBar position="fixed">
        <Container fixed>
          <Toolbar>
          <IconButton edge="start" color="inherit" arial-labeled="menu" >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">Web</Typography>
          <Box mr={3} ml={3}>
            <Button color="inherit" variant="outlined">LogIn</Button>
          </Box>
          <Button color="secondary" variant="content">Logout</Button>
          </Toolbar>
        </Container>
      </AppBar>
	)
}

Menu.propTypes = {

}

export default Menu