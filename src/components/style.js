import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bgYellow: {
        backgroundColor: 'yellowgreen'
    },
    searchTitle: {
        color : '#1A0DAB',
        fontSize: '20px',
    
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
        fontSize: '14px'
    },
    searchRelated: {
        fontSize: '18px',
        color: '#007BFF',
        '& p': {
          '& a': {}
        },
    },
    pagination: {
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
        display: 'flex', 
        justifyContent: "center", 
        alignItems: "center",
        padding: '1em'
    },
    paginationText: {
      marginTop: '0.8em'
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
      // padding: theme.spacing(0, 2),
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: '1em'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
      height: '100%',
      marginBottom: '0.7em',
      [theme.breakpoints.up('xs')]: {
        // marginBottom: '0.1em',
      },
    },
    inputInput: {
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      // transition: theme.transitions.create('width'),
      // width: '100%',
      // [theme.breakpoints.up('md')]: {
      //   width: '15ch',
      // },
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
      paddingTop: '1em',
      paddingLeft: '1em',
      [theme.breakpoints.down('xs')]: {
        // width: '100%',
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
          // display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        // display: 'none'
      },
    },
    appbarTopMobileBreakpoint: {
      padding: '1em',
      [theme.breakpoints.down('xs')]: {
        // width: '100%',
        // display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
          display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      },
    },
    rootAppBar: {
        borderRadius: '0.7em',
        width: '100%',
        height: '3em',
        marginLeft: '0.5em',
        [theme.breakpoints.up('xs')]: {
          width: '100%',
          height: '1em',
      },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '3em',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '3em',
        },
        [theme.breakpoints.up('lg')]: {
            // width: '70%',
        },
    },
    grow: {
      flexGrow: 1,
    },
    rootContainer: {
      // paddingLeft: '10%',
      paddingRight: '-10em',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '3%',
        paddingRight: '0',
        marginTop: '-1.5em'
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '6%',
        paddingRight: '0',
        // marginTop: '1em'
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '3%',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '10%',
      },
    },
    searchResult: {
      paddingBottom: '1.5em',
    },
    logo: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
          // marginRight: '0.3em'
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'inline',
          // marginRight: '0.3em'
        },
    },
    buttonMobile: {
        [theme.breakpoints.down('xs')]: {
          // display: 'none'
          marginLeft: '1em'
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        },      
    },
    toolbarDestop: {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        // display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        // display: 'none'
      },  
    },
    avatarTop: {
      display:  'flex', 
      justifyContent: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        // display: 'inline'
      },
      [theme.breakpoints.up('lg')]: {
        // display: 'inline'
      }, 
    },
    avatarTopMobile: {
      display:  'flex', 
      justifyContent: 'flex-end',
      marginLeft: '4em',
      [theme.breakpoints.down('xs')]: {
        // display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }, 
    },
    mobileAppbarTop: {
      marginTop: '1em',
      [theme.breakpoints.down('xs')]: {
        // display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      },
    },
    toolsEvent: {
      textAlign: "left", 
      padding: 0
    },
    avatarTopMbile: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: '0.1em'
    },
    
    box: {
      marginRight: '-1',
      backgroundColor: "#F2F2F2",
      paddingTop: 10,
      paddingBottom: 15,
      paddingLeft: 15,
      color: "#6F6F6F",
      borderBottom: "1px solid #E4E4E4",
      borderTop: "1px solid #E4E4E4"
  },
  border: {
      borderBottom: "1px solid #E4E4E4"
  },
  margin: {
      marginTop: 5,
      marginBottom: 5
  }
  
  }));


export default useStyles;