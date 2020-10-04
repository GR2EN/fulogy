import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MuiAvatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(({ breakpoints }) => ({
  large: {
    width: 80,
    height: 80,

    [breakpoints.down('xs')]: {
      width: 40,
      height: 40,
    },
  },
}));

const Avatar = ({ src, large, ...props }) => {
  const classes = useStyles();

  return (
    <MuiAvatar className={large && classes.large} src={src} {...props}>
      <img src="/assets/images/avatar_fallback.jpg" alt="user avatar" />
    </MuiAvatar>
  );
};

export default Avatar;
