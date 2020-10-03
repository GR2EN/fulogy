import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { closeInfoDialog } from '../../store/ui/actionCreators';
import { selectInfoDialogVisibility } from '../../store/ui/selectors';

const InfoDialog = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector(selectInfoDialogVisibility);

  const handleClose = () => {
    dispatch(closeInfoDialog());
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={{ paddingTop: 83 }}>
        <DialogContentText style={{ marginBottom: 32 }}>
          {children}
        </DialogContentText>

        <DialogActions>
          <Button
            className={classes.actionButton}
            color="primary"
            onClick={handleClose}
            variant="contained"
          >
            Хорошо
          </Button>
      </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

const useStyles = makeStyles({
  actionButton: {
    width: 200,
    height: 50,
  },
});

export default InfoDialog;
