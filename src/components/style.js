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
    },
    toolbarLink: {
        color: '#68696b',
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
        },
        [theme.breakpoints.down('xs')]: {
          padding:'0 0 1.1rem 0',
          fontSize: '13px'
        },
        [theme.breakpoints.down('sm')]: {
          padding:'0 0.9rem 1.1rem 0',
        },
        [theme.breakpoints.up('md')]: {
          padding:'0 0.9rem 1.1rem 0',
        },
        [theme.breakpoints.up('lg')]: {
          padding:'0 0.9rem 1.1rem 0',
        },
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
          display: 'none'
        },
    },
    appbarTopMobileBreakpoint: {
        padding: '1em',
        marginBottom: '200em',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '1em'
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
        border: '1px solid #cdc5ba',
        width: '100%',
        height: '3em',
        marginLeft: '0.5em',
        [theme.breakpoints.up('xs')]: {
          width: '100%',
          height: '2em',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '3em',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '3em',
        }
    },
    rootAppBarMobile: {
        borderRadius: '0.7em',
        border: '1px solid #cdc5ba',
        width: '100%',
        height: '2.5em',
        marginLeft: '0.5em',
  },
    grow: {
        flexGrow: 1,
    },
    rootContainer: {
        paddingRight: '-10em',
        [theme.breakpoints.down('xs')]: {
          paddingLeft: '3%',
          paddingRight: '0',
          marginTop: '-0.3em'
        },
        [theme.breakpoints.down('sm')]: {
          paddingLeft: '6%',
          paddingRight: '0',
        },
        [theme.breakpoints.up('md')]: {
          paddingLeft: '3%',
        },
        [theme.breakpoints.up('lg')]: {
          paddingLeft: '10%',
        },
    },
    toolsAll: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.up('xs')]: {
          paddingLeft: '-20%',
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: '-7.5%',
          paddingLeft: '1.5%',
          marginBottom: '3%',
          // marginTop: '1em'
        },
        [theme.breakpoints.up('md')]: {
          marginLeft: '-3%',
        },
        [theme.breakpoints.up('lg')]: {
          marginLeft: '-3%',
        }
    },
    searchResult: {
        paddingBottom: '1em',
        marginTop: '-0.5em',
    },
    logo: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'inline',
        },
    },
    buttonMobile: {
        [theme.breakpoints.down('xs')]: {
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        },      
    },
    toolbarDestop: {
        marginTop: '2em',
        marginBottom: '2em',
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        }
    },
    avatarTop: {
        display:  'flex', 
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        }
    },
    avatarTopMobile: {
        display:  'flex', 
        justifyContent: 'flex-end',
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }, 
    },
    mobileAppbarTop: {
        marginTop: '1em',
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
        marginLeft: '1em',
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
    },
    fixMobile: {
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none'
        },
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        },
    }
  
  }));


export default useStyles;