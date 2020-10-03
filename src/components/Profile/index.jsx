import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

import Avatar from '../Avatar';
import ConfirmationDialog from '../Dialog/ConfirmationDialog';
import EditForm from './EditForm';
import InfoDialog from '../Dialog/InfoDialog';
import { selectUserProfile } from '../../store/user/selectors';
import { selectEditFormVisibility } from '../../store/ui/selectors';
import { openEditForm, closeEditForm } from '../../store/ui/actionCreators';

const useStyles = makeStyles({
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingRight: 22,
    paddingBottom: 24,
    paddingLeft: 30,
    backgroundColor: '#1a78c2',
    color: '#fff',
  },
  profileName: {
    display: 'flex',
    alignItems: 'center',
  },
  profileNameText: { marginLeft: 42 },
  profileFooter: { marginTop: 24 },
});

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { fullName, email, phoneNumber, avatarUrl } = useSelector(selectUserProfile);
  const isEditFormVisible = useSelector(selectEditFormVisibility);

  const handleEditFormOpen = useCallback(() => {
    dispatch(openEditForm());
  }, [dispatch, openEditForm]);

  const handleEditFormClose = useCallback(() => {
    dispatch(closeEditForm());
  }, [dispatch, closeEditForm]);

  return (
    <section>
      <Paper className={classes.profileHeader}>
        <div className={classes.profileName}>
          <Avatar src={avatarUrl} large />
          <Typography className={classes.profileNameText} variant="h4">
            {fullName}
          </Typography>
        </div>
        {isEditFormVisible ? (
          <Button color="inherit" endIcon={<CloseIcon />} onClick={handleEditFormClose}>
            Закрыть
          </Button>
        ) : (
          <Button color="inherit" endIcon={<EditIcon />} onClick={handleEditFormOpen}>
            Редактировать
          </Button>
        )}
      </Paper>

      <Paper className={classes.profileFooter}>
        {isEditFormVisible ? (
          <EditForm />
        ) : (
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
        )}
      </Paper>

      <ConfirmationDialog />
      <InfoDialog>Данные успешно сохранены</InfoDialog>
    </section>
  );
};

export default Profile;
