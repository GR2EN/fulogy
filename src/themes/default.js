import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#01bda7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#359ff4',
    },
    error: {
      main: '#eb5757',
    },
    divider: '#cae7fe',
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Open Sans", Arial, sans-serif',
    fontWeightBold: 600,
    h4: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '0.875rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
    },
  },
  overrides: {
    MuiAvatar: {
      root: {
        '& img': {
          width: '100%',
          height: '100%',
        },
      },
    },
    MuiBreadcrumbs: {
      separator: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
      },
      contained: {
        borderRadius: 36,
        textTransform: 'none',
        padding: '12px 26px',
      },
      outlined: {
        borderRadius: 36,
        textTransform: 'none',
        padding: '12px 26px',
      },
    },
    MuiDialog: {
      paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
        height: 318,
      },
    },
    MuiDialogContentText: {
      root: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'rgba(49, 49, 49, 0.7)',
      },
    },
    MuiDialogActions: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 30,
        paddingBottom: 30,
      },
      gutters: {
        paddingLeft: 75,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 75,
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    MuiPaper: {
      root: {
        color: '#313131',
      },
      rounded: {
        borderRadius: 10,
      },
      elevation1: {
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: 36,
      }
    },
    MuiOutlinedInput: {
      root: {
        fontSize: '0.875rem',
      },
      input: {
        padding: '16px 12px',
        paddingTop: 24,
        height: 58,
        boxSizing: 'border-box',
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: '0.875rem',
        transform: 'translate(12px, 24px) scale(1)',
      },
    },
  },
});

export default responsiveFontSizes(defaultTheme);
