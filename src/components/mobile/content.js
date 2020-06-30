import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import logo from '../../assets/images/logo-google.png'
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from '../style'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const components = {
  sm: 10,
  md: 8,
  lg: 8,
  xl: 10,
  xs: 10,
};

function ContentWithWidth(props) {
  const { width } = props;
  const classes = useStyles();
  const widthMobile = components[width] || 10;

  return (
      <div>
        {/* content */}
        <Grid container direction="column" className={classes.rootContainer}>
        <Grid item xs={widthMobile} className={classes.searchResult}>
          <Link className={classes.address} href="https://reactjs.org/">reactjs.org</Link>
          <h1 className={classes.searchTitle}>
            <Link href="#"
              >React – A JavaScript library for building user interfaces</Link>
          </h1>
          <p className={classes.searchContent}>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right ...
          </p>
          <span className={classes.visited}
            >You've visited this page 2 times. Last visit: 6/28/20</span
          >
        </Grid>
        <Grid item xs={widthMobile} className={classes.searchResult}>
          <Link className={classes.address} href="https://reactjs.org/">reactjs.org</Link>
          <h1 className={classes.searchTitle}>
            <Link href="#"
              >React – A JavaScript library for building user interfaces</Link>
          </h1>
          <p className={classes.searchContent}>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right ...
          </p>
          <span className={classes.visited}
            >You've visited this page 2 times. Last visit: 6/28/20</span
          >
        </Grid>
        <Grid item xs={widthMobile} className={classes.searchResult}>
          <Link className={classes.address} href="https://reactjs.org/">reactjs.org</Link>
          <h1 className={classes.searchTitle}>
            <Link href="#"
              >React – A JavaScript library for building user interfaces</Link>
          </h1>
          <p className={classes.searchContent}>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right ...
          </p>
          <span className={classes.visited}
            >You've visited this page 2 times. Last visit: 6/28/20</span
          >
        </Grid>
        <Grid item xs={8} className={classes.searchRelated}>
          <h4>Searches related to reactjs</h4>
            <Grid container direction="row" spacing={10}>
              <Grid item xs={6}>
                <p>
                  <SearchIcon /><Link href="#">reactjs tutorial</Link>
                </p>
                <p>
                  <SearchIcon /><Link href="#">react example</Link>
                </p>
                <p>
                  <SearchIcon /><Link href="#">reactjs example for beginners</Link>
                </p>
                <p>
                <SearchIcon /><Link href="#">install reactjs</Link>
                </p>
              </Grid>
              <Grid item xs={6}>
                <p>
                  <SearchIcon /><Link href="#">reactjs tutorial</Link>
                </p>
                <p>
                  <SearchIcon /><Link href="#">react example</Link>
                </p>
                <p>
                  <SearchIcon /><Link href="#">reactjs example for beginners</Link>
                </p>
                <p>
                  <SearchIcon /><Link href="#">install reactjs</Link>
                </p>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </div>
  );
}

ContentWithWidth.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(ContentWithWidth);
