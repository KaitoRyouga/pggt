import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import logo from '../../assets/images/logogoogle.png'
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../style'
import Avatar from '@material-ui/core/Avatar';

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
                <Avatar alt="KR" src="../../assets/images/logogoogle.png" />
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
