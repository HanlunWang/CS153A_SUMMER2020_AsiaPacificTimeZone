import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Account from '../../containers/Home'
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <ListItemLink component={RouterLink} to="/Account">
            <AccountCircle />
                <ListItemText>
                    &nbsp;&nbsp;Account
                </ListItemText>
        </ListItemLink>
        </List>
      <Divider />
      <List>
        <ListItemLink href="/addItem">
            <AddBoxIcon />
            <ListItemText primary="&nbsp;&nbsp;Post My Item" />
        </ListItemLink>
        </List>
      <Divider />
      <List>
        <ListItem>
            <CategoryIcon />
            <ListItemText primary="&nbsp;&nbsp;Categories" />
        </ListItem>
      </List>
      <List component="nav">
        <ListItemLink href="/Clothing">
          <ListItemText primary="Clothing" />
        </ListItemLink>
        <ListItemLink href="/Books">
          <ListItemText primary="Books" />
        </ListItemLink>
        <ListItemLink href="/Electronics">
          <ListItemText primary="Electronics" />
        </ListItemLink>
        <ListItemLink href="/Furniture">
          <ListItemText primary="Furniture" />
        </ListItemLink>
        <ListItemLink href="/Outdoors">
          <ListItemText primary="Outdoors" />
        </ListItemLink>
        <ListItemLink href="/Other">
          <ListItemText primary="Other" />
        </ListItemLink>
      </List>
    </div>
  );

  return (
        <div>
        {['left'].map((anchor) => (
            <React.Fragment>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                </IconButton>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                {list(anchor)}
            </SwipeableDrawer>
            </React.Fragment>
        ))}
        </div>
  );
}
