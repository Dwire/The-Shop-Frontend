import { adapter } from '../adapters';

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getCurrentUser().then(user => {
    // debugger
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
    dispatch({type: 'ASYNC_START'});
  adapter.auth.register({name, email, password, longitude, latitude}).then(user => {
    localStorage.setItem('token', user.token);
    // dispatch({type: 'SET_CURRENT_USER', payload: user });
    history.push('/profile')
  })
}

export const loginUser = (email, password, longitude, latitude, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.login({ email, password, longitude, latitude }).then(user => {
    localStorage.setItem('token', user.token);
    const {id, name, guru, project, email} = user
    adapter.auth.updateUser({id, name, guru, project, email, longitude, latitude});
    history.push('/profile')
  })
    // dispatch({ type: 'SET_CURRENT_USER', payload: user });
    // history.push('/profile');
};

export const updateUser = (id, name, guru, project, email, history) => dispatch => {
  console.log("HISTORY:", history);
  dispatch({type: 'ASYNC_START'});
  adapter.auth.updateUser({id, name, guru, project, email}).then(user => {
    history.push('/profile')
  })
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

export const createPost = (topic, title, body, user_id, history) => dispatch => {
  dispatch({type: 'ASYNC_START'})
  adapter.auth.createPost({topic, title, body, user_id}).then(user => {
    history.push('/profile')
  })
}


// NOTE: drope some notes for future you
