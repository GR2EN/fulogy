export const selectUser = state => state.user;

export const selectUserProfile = state => selectUser(state).profile;

export const selectUserFullName = state => selectUserProfile(state).fullName;
export const selectUserEmail = state => selectUserProfile(state).email;
export const selectUserPhoneNumber = state => selectUserProfile(state).phoneNumber;
export const selectUserAvatarUrl = state => selectUserProfile(state).avatarUrl;
