import { status } from 'constants';

export const authInitialState = {
  id: null,
  username: null,
  email: null,
  avatar: null,
  statuses: {
    signUp: status.IDLE,
    signIn: status.IDLE,
    signOut: status.IDLE,
    current: status.IDLE,
  },
  errors: {
    signUp: status.IDLE,
    signIn: status.IDLE,
    signOut: status.IDLE,
    current: status.IDLE,
  },
};
