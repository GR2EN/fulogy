import * as actionTypes from './contracts/actionTypes';

const initialState = {
  profile: {
    fullName: 'Иванова Анна Михайловна',
    email: 'Ivanova@mail.ru',
    phoneNumber: '',
    avatarUrl: '',
  },
  isLoading: false,
};

const user = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SAVE_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.SAVE_USER: {
      const { fullName, email, phoneNumber } = action.payload;
      return {
        ...state,
        profile: {
          ...state.profile,
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
        },
        isLoading: false,
      };
    }
    default: return state;
  }
};

export default user;
