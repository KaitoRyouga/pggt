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
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';


const components = {
  sm: 8,
  md: 8,
  lg: 7,
  xl: 10,
  xs: 10,
};

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

function SearchWithWidth(props) {

    // set open/off events

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // end

    // set open/off tools

    const [hiddenTools, setHiddenTools] = React.useState(false);

    const handleClickHiddenTools = (event) => {
        setHiddenTools(!hiddenTools);
    };

    // end

    // mobile state: config drawer
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // list item drawer

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
            {['Tất cả', 'Hình ảnh', 'Video', 'Thêm'].map((text, index) => (
                <ListItem button key={text} onClick={handleClick}>
                {index == 0 && <ListItemIcon><SearchIcon /></ListItemIcon>}
                {index == 1 && 
                    (<ListItemIcon><ImageIcon/></ListItemIcon>)
                }
                {index == 2 && <ListItemIcon><VideoLibraryIcon/></ListItemIcon>}
                {index == 3 && <ListItemIcon><MoreVertIcon/></ListItemIcon>}
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
                <ListItem button key='Cài đặt' >
                <ListItemText primary='Cài đặt' onClick={handleClick}/>
                </ListItem>
                <ListItem button key='Công cụ'>
                <ListItemText primary='Công cụ' onClick={handleClickHiddenTools}/>
            </ListItem>
            </List>
        </div>
    );

    // end
    const { width } = props;
    const classes = useStyles();
    const widthMobile = components[width] || 10;

  return (
      <div>
        {/* mobile state: appbar top ( drawer + brand + avatar ) */}
        <Grid container className={classes.mobileAppbarTop}>
            {/* drawer */}
            <Grid item xs={4}>
            <div className={classes.buttonMobile}>
                <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon></MenuIcon>
                </Button>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
                </React.Fragment>
            </div>
            </Grid>
            {/* brand */}
            <Grid item xs={4}>
            <Link href="https://www.google.com/">
                <img src={logo}/>
                </Link>
            </Grid>
            {/* avatar */}
            <Grid item xs={3} className={classes.avatarTopMbile}>
                <Avatar onClick={handleClick} alt="KR"/>
            </Grid>
        </Grid>
        {/* end */}


        {/* desktop state: appbar top ( brand + search + avatar ) */}
        <Grid className={classes.appbarTop} container direction="row" justify="flex-start" alignItems="center">
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
            <Grid item xs={4} className={classes.avatarTop}>
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

        {/* tools events */}
        <Grid container className={classes.rootContainer}>
            <Toolbar variant="regular" className={classes.toolsEvent}>
            <div className={classes.toolbarDestop}>
            <Link onClick={handleClick} href="#" className={classes.toolbarLink}><SearchIcon></SearchIcon>Tất cả</Link>
            <Link onClick={handleClick} href="#" className={classes.toolbarLink}><ImageIcon ></ImageIcon>Hình ảnh</Link>
            <Link onClick={handleClick} href="#" className={classes.toolbarLink}><VideoLibraryIcon></VideoLibraryIcon>Video</Link>
            <Link onClick={handleClick} href="#" className={classes.toolbarLink}><MoreVertIcon></MoreVertIcon>Thêm</Link>
            <Link onClick={handleClick} href="#" className={classes.settings}>Cài đặt</Link>
            <Link onClick={handleClickHiddenTools} href="#" className={classes.tools}>Công cụ</Link>
            </div>
            {/* event */}

            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                <ListItemText onClick={handleClose} primary="Option 1" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText onClick={handleClose} primary="Option 2" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText onClick={handleClose} primary="Option 3" />
                </StyledMenuItem>
            </StyledMenu>

            </Toolbar>
            <Grid item xs={8}>
            <Divider light />
            </Grid>
            {/* tool */}
            {hiddenTools &&
            (<Grid>
                <Toolbar>
                <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Mọi ngôn ngữ
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                </Link>
                <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Mọi lúc
                <ArrowDropDownIcon></ArrowDropDownIcon>
                </Link>
                <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Tất cả kết quả
                <ArrowDropDownIcon></ArrowDropDownIcon>
                </Link>
                </Toolbar>
            </Grid>)
            }
        </Grid>
      </div>
  );
}

SearchWithWidth.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(SearchWithWidth);
