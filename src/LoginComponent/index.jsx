import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  
  },
  buttonStyle:{
    fontSize: 15,
    color : ' #FFFFFF',
    
  },
  
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (<div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.grow}>
            Weather Application
          </Typography>
         <a href="/login"><Button className={classes.buttonStyle} color="inherit">Login</Button></a>
         <a href="/signup"><Button className={classes.buttonStyle} color="inherit">Signup</Button></a>
        </Toolbar>
      </AppBar>
    </div>
    <strong><h1>Weather App</h1></strong>
<div className="WeatherText">
<p><strong>Weather</strong> is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy. Most weather phenomena occur in the lowest level of the atmosphere, the troposphere, just below the stratosphere. Weather refers to day-to-day temperature and precipitation activity, whereas climate is the term for the averaging of atmospheric conditions over longer periods of time. When used without qualification, "weather" is generally understood to mean the weather of Earth.</p>
<div className="image">
{/* <img alt="" src={require('../LoginComponent/XHqB.gif')}/> */}
</div>
</div>

    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);