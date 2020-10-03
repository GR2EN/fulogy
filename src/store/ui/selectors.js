export const selectUi = state => state.ui;

export const selectEditForm = state => selectUi(state).editForm;
export const selectConfirmationDialog = state => selectUi(state).confirmationDialog;
export const selectInfoDialog = state => selectUi(state).infoDialog;

export const selectEditFormVisibility = state => selectEditForm(state).isVisible;
export const selectConfirmationDialogVisibility = state => selectConfirmationDialog(state).isVisible;
export const selectInfoDialogVisibility = state => selectInfoDialog(state).isVisible;

export const selectConfirmationDialogUserProfile = state => selectConfirmationDialog(state).userProfile;
