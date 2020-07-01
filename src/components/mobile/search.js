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

// menu appears when clicked

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

// end

// function search change in proportion

function SearchWithWidth(props) {

    // set width scrceen
    const { width } = props;
    const classes = useStyles();
    const widthMobile = components[width] || 10;

    // set hidden event
    const [eventAll, seteventAll] = React.useState(false);
    const [eventImage, seteventImage] = React.useState(false);
    const [eventVideo, seteventVideo] = React.useState(false);
    const [eventMore, seteventMore] = React.useState(false);
    const [eventSetting, seteventSetting] = React.useState(false);

    // set open/off drawer
    const [openState, setopenState] = React.useState(false);

    const handleClickOpenDrawer = () => {
        setopenState(!openState);
    };

    const handleClickeventAll = (event) => {
        seteventAll(!eventAll);
    };

    const handleClickeventImage = (event) => {
        seteventImage(!eventImage);
    };

    const handleClickeventVideo = (event) => {
        seteventVideo(!eventVideo);
    };

    const handleClickeventSetting = (event) => {
        seteventSetting(!eventSetting);
    };

    const handleClickeventMore = (event) => {
        seteventMore(!eventMore);
    };

    // set open/off events

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElMobile, setAnchorElMobile] = React.useState(null);

    const handleClickMobile = (event) => {
        setAnchorElMobile(event.currentTarget);
    };

    const handleCloseMobile = () => {
        setAnchorElMobile(null);
    };

    // end

    // set open/off tools

    const [hiddenTools, setHiddenTools] = React.useState(false);

    const handleClickHiddenTools = (event) => {
        
        if(width == 'xs'){
            handleClickOpenDrawer();
        }
        setHiddenTools(!hiddenTools);
    };

    // end

    // list item drawer

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={handleClickOpenDrawer}
        >
            <List>
                <ListItem onClick={handleClickeventAll} button key='Tất cả'>
                    <ListItemIcon><SearchIcon /></ListItemIcon>
                    <ListItemText primary='Tất cả' />
                </ListItem>
                <Divider />
                {
                    eventAll && (
                        <div>
                            <ListItem button key='Options 1'>
                                <ListItemIcon></ListItemIcon>
                            <ListItemText primary='Options 1' />
                            </ListItem>
                            <ListItem button key='Options 2'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 2' />
                            </ListItem>
                            <ListItem button key='Options 3'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 3' />
                            </ListItem>
                            <Divider />
                            <Divider />
                        </div>
                    )
                }

                <ListItem onClick={handleClickeventImage} button key='Hình ảnh'>
                    <ListItemIcon><ImageIcon/></ListItemIcon>
                    <ListItemText primary='Hình ảnh' />
                </ListItem>

                {
                    eventImage && (
                        <div>
                            <ListItem button key='Options 1'>
                                <ListItemIcon></ListItemIcon>
                            <ListItemText primary='Options 1' />
                            </ListItem>
                            <ListItem button key='Options 2'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 2' />
                            </ListItem>
                            <ListItem button key='Options 3'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 3' />
                            </ListItem>
                            <Divider />
                            <Divider />
                        </div>
                    )
                }

                <ListItem onClick={handleClickeventVideo} button key='Video'>
                <ListItemIcon><VideoLibraryIcon/></ListItemIcon>
                    <ListItemText primary='Video' />
                </ListItem>

                {
                    eventVideo && (
                        <div>
                            <ListItem button key='Options 1'>
                                <ListItemIcon></ListItemIcon>
                            <ListItemText primary='Options 1' />
                            </ListItem>
                            <ListItem button key='Options 2'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 2' />
                            </ListItem>
                            <ListItem button key='Options 3'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 3' />
                            </ListItem>
                            <Divider />
                            <Divider />
                        </div>
                    )
                }

                <ListItem onClick={handleClickeventMore} button key='Thêm'>
                <ListItemIcon><MoreVertIcon/></ListItemIcon>
                    <ListItemText primary='Thêm' />
                </ListItem>
                {
                    eventMore && (
                        <div>
                            <ListItem button key='Options 1'>
                                <ListItemIcon></ListItemIcon>
                            <ListItemText primary='Options 1' />
                            </ListItem>
                            <ListItem button key='Options 2'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 2' />
                            </ListItem>
                            <ListItem button key='Options 3'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 3' />
                            </ListItem>
                            <Divider />
                            <Divider />
                        </div>
                    )
                }
            </List>
            <Divider />
            <List>
                <ListItem onClick={handleClickeventSetting} button key='Cài đặt' >
                <ListItemText primary='Cài đặt'/>
                </ListItem>

                {
                    eventSetting && (
                        <div>
                            <ListItem button key='Options 1'>
                                <ListItemIcon></ListItemIcon>
                            <ListItemText primary='Options 1' />
                            </ListItem>
                            <ListItem button key='Options 2'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 2' />
                            </ListItem>
                            <ListItem button key='Options 3'>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary='Options 3' />
                            </ListItem>
                            <Divider />
                            <Divider />
                        </div>
                    )
                }

                <ListItem  onClick={handleClickHiddenTools} button key='Công cụ'>
                <ListItemText primary='Công cụ'/>
            </ListItem>
            </List>
        </div>
    );

    // end

  return (
      <div>

        {/* mobile state: appbar top ( drawer + brand + avatar ) */}
        <Grid container className={classes.mobileAppbarTop}>
            {/* drawer */}
            <Grid item xs={4}>
            <div className={classes.buttonMobile}>
                <React.Fragment key={'left'}>
                <Button onClick={handleClickOpenDrawer}>
                    <MenuIcon></MenuIcon>
                </Button>
                <SwipeableDrawer
                    anchor={'left'}
                    open={openState}
                    onClose={handleClickOpenDrawer}
                    onOpen={handleClickOpenDrawer}
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
            <Grid item xs={4} className={classes.avatarTopMobile}>
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
            <AppBar color="transparent" position="static" classes={{root: classes.rootAppBarMobile}}>
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
        <Grid container direction="column" className={classes.rootContainer}>
            {/* <Toolbar variant="regular" className={classes.toolsEvent}> */}
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

            {/* </Toolbar> */}
            <Grid item xs={8}>
            <Divider light />
            </Grid>
            {/* tool */}
        </Grid>


        <Grid container direction="column" className={classes.rootContainer}>
            {hiddenTools &&
                (
                <Grid item xs={widthMobile} className={classes.searchResult}>
                    <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Mọi ngôn ngữ
                            <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Link>
                    <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Mọi lúc
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Link>
                    <Link onClick={handleClick} href="#" className={classes.toolbarLink}>Tất cả kết quả
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                    </Link>
                </Grid>
                )
            }
      </Grid>
      </div>
  );
}

SearchWithWidth.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(SearchWithWidth);