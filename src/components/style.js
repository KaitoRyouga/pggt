import { makeStyles } from '@material-ui/core/styles';

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
    },
    inputRoot: {
      color: 'inherit'
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
      padding: '1em',
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
        borderRadius: '1em',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
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
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '3%',
        paddingRight: '0'
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '3%',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '10%',
      },
    },
    searchResult: {
      paddingBottom: '2em'
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
          marginRight: '0.3em'
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
      marginLeft: '4em',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        display: 'inline'
      },
      [theme.breakpoints.up('lg')]: {
        display: 'inline'
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
    }
  
  }));


export default useStyles;