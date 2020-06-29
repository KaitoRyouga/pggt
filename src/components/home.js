import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
// import logo from '../../assets/images/logo-google.png'
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const useStyles = makeStyles((theme) => ({
    bgYellow: {
        backgroundColor: 'yellowgreen'
    },
    searchTitle: {
        color : '#1A0DAB',
        fontSize: '21px',
    
    },
    address: {
        fontSize: '17px',
        color: '#535156',
        textDecoration: 'none',
        marginBottom: '20em'
    },
    visited: {
        color : '#70757A'
    },
    searchContent: {
        color: '#535156',
        fontSize: '18px'
    },
    searchRelated: {
        fontSize: '18px',
        color: '#007BFF',
        '& p': {

            '& a': {

            }
        },
        
    },
    pagination: {
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
    },
  result: {
      color: '#a19999',
  
  },
  search: {
      borderRadius: '1rem 0 0 1rem',
      borderRight: 'none',
      width: '42rem',
      outline: 'none',
      height: '2.6rem',
      padding: '1rem',
      border: '1px solid #CED4DA',
  },
  utilities: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #CED4DA',
      borderRadius: '0 1rem 1rem 0',
      height: '2.6rem',
      borderLeft: 'none',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
 toolbarLink: {
  color: '#68696b',
  padding:'0 0.9rem 1.1rem 0.9rem',
   '&:focus': {
    color: '#1AA2F1',
    border: '3px solid #1A73E8',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    textDecoration: 'none',
   },
   '&:hover': {
    textDecoration: 'none',
   }
},
tools: {
  padding:'0 0.9rem 1.1rem 0.9rem',
  color: '#68696b',
  '&:hover': {
    textDecoration: 'none',
    color: '#68696b'
  },
},
settings: {
  padding:'0 0.9rem 1.1rem 0.9rem',
  color: '#68696b',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: '#68696b'
  },
  '&:focus': {
    color: '#1AA2F1'
  }

},
appbarTop: {
  margin: '1em'
},
rootAppBar: {
  width: '70%'
},
grow: {
  flexGrow: 1,
},
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [hiddenTools, setHiddenTools] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickHiddenTools = (event) => {
    setHiddenTools(!hiddenTools);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div>
    <Grid className={classes.appbarTop} container direction="row" alignItems="center">
        <Grid item xs={1}>
        {/* <Link href="https://www.google.com/">
            <img src={logo}/>
          </Link> */}
        </Grid>
        
        <Grid item xs={11}>
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
      </Toolbar>
    </AppBar>
        </Grid>
    </Grid>
    <div className="container">
    <Grid container style={{justifyContent: "flex-start"}}>
      <Toolbar variant="regular" style={{textAlign: "left", padding: 0}}>
          <Link onClick={handleClick} href="#" className={classes.toolbarLink}><SearchIcon></SearchIcon>Tất cả</Link>
          <Link onClick={handleClick} href="#" className={classes.toolbarLink}>
            <ImageIcon ></ImageIcon>
          Hình ảnh
          </Link>
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
          
          <Link onClick={handleClick} href="#" className={classes.toolbarLink}><VideoLibraryIcon></VideoLibraryIcon>Video</Link>
          <Link onClick={handleClick} href="#" className={classes.toolbarLink}><MoreVertIcon></MoreVertIcon>Thêm</Link>
          <Link onClick={handleClick} href="#" className={classes.settings}>Cài đặt</Link>
          <Link onClick={handleClickHiddenTools} href="#" className={classes.tools}>Công cụ</Link>
          </Toolbar>
    <div className="container-fluid">
       <hr />
    </div>
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
    {/* <Grid container> */}

    {/* </Grid> */}
    <Grid container>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <a className={classes.address} href="https://reactjs.org/">reactjs.org</a>
          <h1 className={classes.searchTitle}>
            <a href="#"
              >React – A JavaScript library for building user interfaces</a
            >
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
        <Grid item xs={8}>
          <a className={classes.address} href="https://reactjs.org/">reactjs.org</a>
          <h1 className={classes.searchTitle}>
            <a href="#"
              >React – A JavaScript library for building user interfaces</a
            >
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
        <Grid item xs={8}>
          <a className={classes.address} href="https://reactjs.org/">reactjs.org</a>
          <h1 className={classes.searchTitle}>
            <a href="#"
              >React – A JavaScript library for building user interfaces</a
            >
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
            {/* <Grid item xs={12}> */}
                <Grid item xs={6}>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">reactjs tutorial</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">react example</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">reactjs example for beginners</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">install reactjs</a>
                </p>
              </Grid>
              <Grid item xs={6}>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">reactjs tutorial</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">react example</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">reactjs example for beginners</a>
                </p>
                <p>
                  <i className="fas fa-search mr-2"></i
                  ><a href="#">install reactjs</a>
                </p>
              </Grid>
            {/* </Grid> */}
            </Grid>
        </Grid>
        <Grid item xs={8}>
            <div className={classes.pagination }>
                <Typography>Page: {page}</Typography>
                <Pagination color="primary" count={10} page={page} onChange={handleChange} />
            </div>
        </Grid>
      </Grid>
    </Grid>
      </div>
      </div>
  );
}