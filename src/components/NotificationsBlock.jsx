import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import Avatar from './Avatar';
import { selectUserInitials } from '../store/user/selectors';

export const useStyles = makeStyles(({ breakpoints }) => ({
  notifications: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 0,
    height: 40,
    listStyle: 'none',

    [breakpoints.down('xs')]: {
      height: 24,
    },

    '& li': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      marginRight: 20,

      [breakpoints.down('xs')]: {
        marginRight: 10,
      },
    },

    '& li:last-child': {
      marginRight: 25,

      [breakpoints.down('xs')]: {
        marginRight: 0,
      },
    },
  },
}));

const NotificationBlock = () => {
  const classes = useStyles();
  const userInitials = useSelector(selectUserInitials);

  return (
    <ul className={classes.notifications}>
      <li>
        <IconButton color="inherit" size="small">
          <NotificationsIcon />
        </IconButton>
      </li>
      <li>
        <Divider orientation="vertical" />
      </li>
      <li>
        <Avatar />
      </li>
      <Hidden xsDown>
        <li>
          <Typography variant="subtitle2">{userInitials}</Typography>
        </li>
      </Hidden>
    </ul>
  );
};

export default NotificationBlock;
