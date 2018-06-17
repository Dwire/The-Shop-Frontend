import { adapter } from '../adapters';

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  });
};

export const fetchUsers = () => dispatch => {
  dispatch({ type: 'ASYNC_START'});
     adapter.auth.getAllUsers().then(users => {
       dispatch({type: 'SET_CURRENT_USERS', payload: users})
     })
}

export const registerUser = (name, email, password, longitude, latitude, history) => dispatch => {
  debugger
    dispatch({type: 'ASYNC_START'});
  adapter.auth.register({name, email, password, longitude, latitude}).then(user => {
    localStorage.setItem('token', user.token);
    // dispatch({type: 'SET_CURRENT_USER', payload: user });
    history.push('/profile')
  })
}

export const loginUser = (email, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.login({ email, password }).then(user => {
    localStorage.setItem('token', user.token);
    // dispatch({ type: 'SET_CURRENT_USER', payload: user });
    history.push('/profile');
  });
};

export const updateUser = (id, name, guru, project, email, history) => dispatch => {
  dispatch({type: 'ASYNC_START'});
  adapter.auth.updateUser({id, name, guru, project, email}).then(user => {
    history.push('/profile')
  })
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};


// NOTE: drope some notes for future you
