import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Hidden from '@material-ui/core/Hidden';
import { closeInfoDialog } from '../../store/ui/actionCreators';
import { selectInfoDialogVisibility } from '../../store/ui/selectors';

const useStyles = makeStyles(({ breakpoints }) => ({
  dialogContent: {
    [breakpoints.up('sm')]: {
      marginTop: 63,
    },
  },
  dialogActions: {
    [breakpoints.up('sm')]: {
      marginTop: 32,
    },
  },
  actionButton: {
    width: 200,
    height: 50,
  },
}));

const InfoDialog = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(selectInfoDialogVisibility);

  const handleClose = () => {
    dispatch(closeInfoDialog());
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText>{children}</DialogContentText>

        <Hidden xsDown>
          <DialogActions className={classes.dialogActions}>
            <Button
              className={classes.actionButton}
              color="primary"
              onClick={handleClose}
              variant="contained"
            >
              Хорошо
            </Button>
          </DialogActions>
        </Hidden>
      </DialogContent>
    </Dialog>
  );
};

export default InfoDialog;
