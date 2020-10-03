/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectUserProfile = createSelector([selectUser], (user) => user.profile);

export const selectUserFullName = createSelector(
  [selectUserProfile],
  (profile) => profile.fullName,
);

export const selectUserEmail = createSelector([selectUserProfile], (profile) => profile.email);

export const selectUserPhoneNumber = createSelector(
  [selectUserProfile],
  (profile) => profile.phoneNumber,
);

export const selectUserAvatarUrl = createSelector(
  [selectUserProfile],
  (profile) => profile.avatarUrl,
);

export const selectUserInitials = (state) => {
  const fullName = selectUserFullName(state);
  // find first whitespace
  let index = fullName.indexOf(' ');
  // if fullName doesn't have whitespace return fullName as is
  if (index !== -1) {
    index += 2;
  } else {
    return fullName;
  }
  // formate initials
  return fullName.substr(0, index).concat('.');
};
