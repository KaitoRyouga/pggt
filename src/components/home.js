import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from './style'
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
import Search from './mobile/search'
import Content from './mobile/content'
import logo from '../assets/images/logogoogle.png'


export default function AlignItemsList() {

  const classes = useStyles();

  // set state page

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // end

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

      <Search/>
      
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
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
        <div className="container-fluid">
          <hr />
        </div>
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
      {/* content */}
        <Content></Content>
        {/* pagination */}
      <div className={classes.pagination }>
          <Typography>Page: {page}</Typography>
          <Pagination color="primary" count={10} page={page} onChange={handleChange} />
      </div>
    </div>
  );
}