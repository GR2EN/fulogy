/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from 'reselect';

export const selectUi = (state) => state.ui;

export const selectEditForm = createSelector([selectUi], (ui) => ui.editForm);

export const selectConfirmationDialog = createSelector([selectUi], (ui) => ui.confirmationDialog);

export const selectInfoDialog = createSelector([selectUi], (ui) => ui.infoDialog);

export const selectEditFormVisibility = createSelector(
  [selectEditForm],
  (editForm) => editForm.isVisible,
);

export const selectConfirmationDialogVisibility = createSelector(
  [selectConfirmationDialog],
  (confirmationDialog) => confirmationDialog.isVisible,
);

export const selectInfoDialogVisibility = createSelector(
  [selectInfoDialog],
  (infoDialog) => infoDialog.isVisible,
);

export const selectConfirmationDialogUserProfile = createSelector(
  [selectConfirmationDialog],
  (confirmationDialog) => confirmationDialog.userProfile,
);
