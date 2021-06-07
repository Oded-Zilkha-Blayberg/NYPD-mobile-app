import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { ThemeProvider, Header } from 'react-native-elements';


import Fab from '@material-ui/core/Fab';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { View } from 'react-native';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    color: '#f8f9fb',
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    backgroundColor: '#040848',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Navbar() {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        {/* <AppBar position="fixed" className={classes.appBar}>
            <BottomNavigation
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            showLabels
            className={classes.root}
            >
                <BottomNavigationAction label="בית" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction label="זיהוי חשוד" icon={<SearchRoundedIcon />} />
                <Fab aria-label="add" color="inherit" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
                <BottomNavigationAction label="מפה" icon={<MapRoundedIcon />}/>
                <BottomNavigationAction label="דיווחים" icon={<AnnouncementRoundedIcon />}/>
            </BottomNavigation>                   
        </AppBar>  */}
    </React.Fragment>
  );
}
