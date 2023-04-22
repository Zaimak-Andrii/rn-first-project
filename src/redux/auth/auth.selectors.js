export const selectAuth = (state) => state.auth;

export const selectIsAuth = (state) => selectAuth(state).username !== null;
