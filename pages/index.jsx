import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

import NotificationsBlock from '../src/components/NotificationsBlock';
import Profile from '../src/components/Profile';

export const useHomeStyles = makeStyles(({ breakpoints }) => ({
  container: {
    background: 'url("/assets/images/header_bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: 'auto',
    paddingTop: 20,
    paddingRight: 23,
    paddingLeft: 34,
    minHeight: '100vh',

    [breakpoints.down('md')]: {
      backgroundSize: '100% 350px',
    },

    [breakpoints.down('xs')]: {
      backgroundPosition: 'top left',
      backgroundSize: '100% 200px',
      padding: 10,
      paddingTop: 17,
    },
  },
  header: {
    marginBottom: 26,
    color: '#fff',

    [breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  headerTitle: {
    marginTop: 18,
  },
  headerNav: {
    marginTop: 7,
    color: '#fff',
  },
}));

export default function Home() {
  const classes = useHomeStyles();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <NotificationsBlock />

        <div>
          <Typography className={classes.headerTitle} variant="h5">
            ЛИЧНЫЙ ПРОФИЛЬ
          </Typography>
          <Breadcrumbs className={classes.headerNav}>
            <Typography color="inherit" variant="subtitle1">
              Главная
            </Typography>
            <Typography color="inherit" variant="subtitle1">
              Личный профиль
            </Typography>
          </Breadcrumbs>
        </div>
      </header>

      <main>
        <Profile />
      </main>
    </div>
  );
}
