import React from 'react';
import { useSelector } from 'react-redux';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import EmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import { selectUserEmail, selectUserPhoneNumber } from '../../store/user/selectors';

const ProfileInfoList = () => {
  const email = useSelector(selectUserEmail);
  const phoneNumber = useSelector(selectUserPhoneNumber);

  return (
    <List disablePadding>
      <ListItem>
        <ListItemIcon>
          <EmailIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={email} />
      </ListItem>

      <Divider />

      <ListItem>
        <ListItemIcon>
          <PhoneIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={phoneNumber || 'Укажите номер телефона'} />
      </ListItem>
    </List>
  );
};

export default ProfileInfoList;
