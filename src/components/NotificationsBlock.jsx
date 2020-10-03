import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import Avatar from './Avatar';
import { selectUserInitials } from '../store/user/selectors';

export const useStyles = makeStyles({
  notifications: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5,
    height: 40,

    '& > *': {
      marginRight: 20,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
});

const NotificationBlock = () => {
  const classes = useStyles();
  const userInitials = useSelector(selectUserInitials);

  return (
    <div className={classes.notifications}>
      <IconButton color="inherit" size="small">
        <NotificationsIcon />
      </IconButton>
      <Divider orientation="vertical" />
      <Avatar />
      <Typography variant="subtitle2">{userInitials}</Typography>
    </div>
  );
};

export default NotificationBlock;
