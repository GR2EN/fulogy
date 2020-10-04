import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import Avatar from '../Avatar';
import ConfirmationDialog from '../Dialog/ConfirmationDialog';
import EditForm from './ProfileEditForm';
import InfoDialog from '../Dialog/InfoDialog';
import InfoList from './ProfileInfoList';
import { selectUserFullName, selectUserAvatarUrl } from '../../store/user/selectors';
import { selectEditFormVisibility } from '../../store/ui/selectors';
import { openEditForm, closeEditForm } from '../../store/ui/actionCreators';

const useStyles = makeStyles(({ breakpoints }) => ({
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

    [breakpoints.down('xs')]: {
      paddingTop: 16,
      paddingRight: 10,
      paddingBottom: 15,
      paddingLeft: 10,
    },
  },
  profileName: {
    display: 'flex',
    alignItems: 'center',
  },
  profileNameText: {
    marginLeft: 42,

    [breakpoints.down('xs')]: {
      marginLeft: 10,
    },
  },
  profileFooter: {
    marginTop: 24,

    [breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fullName = useSelector(selectUserFullName);
  const avatarUrl = useSelector(selectUserAvatarUrl);
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
          <>
            <Hidden xsDown>
              <Button color="inherit" endIcon={<CloseIcon />} onClick={handleEditFormClose}>
                Закрыть
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton color="inherit" onClick={handleEditFormClose} size="small">
                <CloseIcon />
              </IconButton>
            </Hidden>
          </>
        ) : (
          <>
            <Hidden xsDown>
              <Button color="inherit" endIcon={<EditIcon />} onClick={handleEditFormOpen}>
                Редактировать
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton color="inherit" onClick={handleEditFormOpen} size="small">
                <EditIcon />
              </IconButton>
            </Hidden>
          </>
        )}
      </Paper>

      <Paper className={classes.profileFooter}>
        {isEditFormVisible ? <EditForm /> : <InfoList />}
      </Paper>

      <ConfirmationDialog />
      <InfoDialog>Данные успешно сохранены</InfoDialog>
    </section>
  );
};

export default Profile;
