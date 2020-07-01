import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './style'
import Search from './mobile/search'
import Content from './mobile/content'


export default function AlignItemsList() {

  const classes = useStyles();

  // set state page

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // end

  return (
    <div>
      {/* desktop state: appbar top ( brand + search + avatar ) */}

      <Search/>
      
      {/* content */}
        <Content></Content>
        {/* pagination */}
      <div className={classes.pagination}>
          <Typography className={classes.paginationText}>Page: {page}</Typography>
          <Pagination color="primary" count={10} page={page} onChange={handleChange} />
      </div>
      <Grid container className={classes.box}>
          {/* <Grid item xs={12} className={classes.margin}><Link href="#">Việt Nam</Link></Grid> */}
          <Grid item xs={6} className={classes.margin}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
              <Grid item md={2} >
                <Link href="#">Advertising</Link>
              </Grid>
              <Grid item md={2} >
                <Link href="#">Bussiness</Link>
              </Grid>
              <Grid item md={2} >
                <Link href="#">About</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item md={2}>
                <Link href="#">Privacy</Link>
              </Grid>
              <Grid item md={2}>
                <Link href="#">Terms</Link>
              </Grid>
              <Grid item md={2}>
                <Link href="#">Settings</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}