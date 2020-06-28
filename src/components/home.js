import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import logo from '../../assets/images/logo.png'
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField'

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
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
      <div className="container">
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
            <Grid container direction="row" spacing={12}>
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
  );
}