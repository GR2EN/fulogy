import * as actionTypes from './contracts/actionTypes';

const initialState = { 
  editForm: {
    isVisible: false,
  },
  confirmationDialog: {
    isVisible: false,
    userProfile: {},
  },
  infoDialog: {
    isVisible: false,
  },
};

const ui = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.OPEN_EDIT_FORM: {
      return {
        ...state,
        editForm: {
          ...state.editForm,
          isVisible: true,
        },
      };
    }
    case actionTypes.CLOSE_EDIT_FORM: {
      return {
        ...state,
        editForm: {
          ...state.editForm,
          isVisible: false,
        },
      };
    }
    case actionTypes.OPEN_CONFIRMATION_DIALOG: {
      return {
        ...state,
        confirmationDialog: {
          ...state.confirmationDialog,
          isVisible: true,
          userProfile: action.payload,
        },
      };
    }
    case actionTypes.CLOSE_CONFIRMATION_DIALOG: {
      return {
        ...state,
        confirmationDialog: {
          ...state.confirmationDialog,
          isVisible: false,
          userProfile: {},
        },
      };
    }
    case actionTypes.OPEN_INFO_DIALOG: {
      return {
        ...state,
        infoDialog: {
          ...state.infoDialog,
          isVisible: true,
        },
      };
    }
    case actionTypes.CLOSE_INFO_DIALOG: {
      return {
        ...state,
        infoDialog: {
          ...state.infoDialog,
          isVisible: false,
        },
        editForm: {
          ...state.editForm,
          isVisible: false,
        },
      };
    }
    default: return state;
  }
};

export default ui;
