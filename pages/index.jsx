import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import Avatar from '../src/components/Avatar';
import Profile from '../src/components/Profile';
import { selectUserFullName } from '../src/store/user/selectors';

export default function Home() {
  const classes = useHomeStyles();
  const userFullName = useSelector(selectUserFullName);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.notifications}>
          <IconButton color="inherit" size="small">
            <NotificationsIcon />
          </IconButton>
          <Divider orientation="vertical" />
          <Avatar />
          <Typography variant="subtitle2">{userFullName}</Typography>
        </div>

        <div>
          <Typography className={classes.headerTitle} variant="h5">ЛИЧНЫЙ ПРОФИЛЬ</Typography>
          <Breadcrumbs className={classes.headerNav}>
            <Typography color="inherit" variant="subtitle1">Главная</Typography>
            <Typography color="inherit" variant="subtitle1">Личный профиль</Typography>
          </Breadcrumbs>
        </div>
      </header>

      <main>
        <Profile />
      </main>
    </div>
  );
};

export const useHomeStyles = makeStyles({
  container: {
    background: 'url("/assets/images/header_bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: 'auto',
    paddingTop: 20,
    paddingRight: 23,
    paddingLeft: 34,
    minHeight: '100vh',
  },
  header: {
    marginBottom: 26,
    color: '#fff',
  },
  headerTitle: {
    marginTop: 18,
  },
  headerNav: {
    marginTop: 7,
    color: '#fff',
  },
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
