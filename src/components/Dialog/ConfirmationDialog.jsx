import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { closeConfirmationDialog } from '../../store/ui/actionCreators';
import { fetchSaveUser } from '../../store/user/actionCreators';
import {
  selectConfirmationDialogVisibility,
  selectConfirmationDialogUserProfile,
} from '../../store/ui/selectors';

const useStyles = makeStyles({
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  actionButton: {
    width: 200,
    height: 50,
  },
});

const ConfirmationDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(selectConfirmationDialogVisibility);
  const userProfile = useSelector(selectConfirmationDialogUserProfile);

  const handleClose = () => {
    dispatch(closeConfirmationDialog());
  };

  const handleConfirm = () => {
    dispatch(fetchSaveUser(userProfile));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton className={classes.closeButton} onClick={handleClose}>
        <CloseIcon style={{ fontSize: 24 }} />
      </IconButton>

      <DialogContent style={{ paddingTop: 68 }}>
        <DialogContentText style={{ marginBottom: 22 }}>Сохранить изменения?</DialogContentText>

        <DialogActions disableSpacing>
          <Button
            className={classes.actionButton}
            color="primary"
            onClick={handleConfirm}
            style={{ marginBottom: 28 }}
            variant="contained"
          >
            Сохранить
          </Button>
          <Button
            className={classes.actionButton}
            color="primary"
            onClick={handleClose}
            variant="outlined"
          >
            Не сохранять
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
