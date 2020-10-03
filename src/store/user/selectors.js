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
  // find first whitespace and concat first letter of first name
  const index = fullName.indexOf(' ') + 2;
  // formate initials
  return fullName.substr(0, index).concat('.');
};
