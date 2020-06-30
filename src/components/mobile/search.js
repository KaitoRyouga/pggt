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
  sm: 6,
  md: 8,
  lg: 8,
  xl: 10,
  xs: 10,
};

function SearchWithWidth(props) {
  const { width } = props;
  const classes = useStyles();
  const widthMobile = components[width] || 10;

  return (
      <div>
        {/* desktop state: appbar top ( brand + search + avatar ) */}
        <Grid className={classes.appbarTop} container direction="row" alignItems="center">
            {/* brand */}
            <Grid item xs={1} className={classes.logo}>
            <Link href="https://www.google.com/">
                <img src={logo}/>
                </Link>
            </Grid>
            {/* search */}
            <Grid item xs={widthMobile}>
            <AppBar color="transparent" position="static" classes={{root: classes.rootAppBar}}>
                <Toolbar>
                <InputBase
                    placeholder="Search…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.grow} />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                </Toolbar>
            </AppBar>
            </Grid>
            
            {/* avatar */}
            <Grid item xs={1} className={classes.avatarTop}>
                <Avatar alt="KR" src="../../assets/images/logo-google.png" />
            </Grid>
        </Grid>

        <Grid className={classes.appbarTopMobileBreakpoint} container direction="row" alignItems="center">
            {/* search */}
            <Grid item xs={12}>
            <AppBar color="transparent" position="static" classes={{root: classes.rootAppBar}}>
                <Toolbar>
                <InputBase
                    placeholder="Search…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.grow} />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                </Toolbar>
            </AppBar>
            </Grid>
        </Grid>
      </div>
  );
}

SearchWithWidth.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(SearchWithWidth);
