import {User} from '../../models/Auth';
import {authSlice} from '../reducers/AuthSlice';
import {AppDispatch} from '../store';

const rightLogin = 'admin';
const rightPassword = 'admin';
const currentUser: User = {name: 'admin'};

export const logIn =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      if (login === rightLogin && password === rightPassword) {
        setTimeout(
          () => dispatch(authSlice.actions.authFetchingSuccess(currentUser)),
          2000,
        );
      } else {
        setTimeout(
          () =>
            dispatch(
              authSlice.actions.authFetchingError(
                'invalid username or password',
              ),
            ),
          2000,
        );
      }
    } catch (e: any) {
      dispatch(authSlice.actions.authFetchingError(e.message));
    }
  };
