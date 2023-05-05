export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectAuthIsLoading = state => state.auth.authIsLoading;
export const selectAuthUser = state => state.auth.user;
export const selectIsOnline = state => state.auth.isOnline;
export const selectIsRefreshing = state => state.auth.isRefreshing;
