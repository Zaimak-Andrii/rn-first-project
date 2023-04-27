export const selectAuth = (state) => state.auth;

export const selectUser = (state) => {
  const { id, username, email, avatar } = selectAuth(state);

  return { id, username, email, avatar };
};
export const selectIsAuth = (state) => selectAuth(state).username !== null;
