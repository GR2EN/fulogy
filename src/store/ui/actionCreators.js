import * as actionTypes from './contracts/actionTypes';

export const openEditForm = () => ({
  type: actionTypes.OPEN_EDIT_FORM,
});

export const openConfirmationDialog = (payload) => ({
  type: actionTypes.OPEN_CONFIRMATION_DIALOG,
  payload,
});

export const openInfoDialog = () => ({
  type: actionTypes.OPEN_INFO_DIALOG,
});

export const closeEditForm = () => ({
  type: actionTypes.CLOSE_EDIT_FORM,
});

export const closeConfirmationDialog = () => ({
  type: actionTypes.CLOSE_CONFIRMATION_DIALOG,
});

export const closeInfoDialog = () => ({
  type: actionTypes.CLOSE_INFO_DIALOG,
});
