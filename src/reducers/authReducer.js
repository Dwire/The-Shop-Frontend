// import {SET_CURRENT_USER, LOGOUT_USER} from '../actions/types'

const initialState = {
   currentUser: {},
   localUsers: []
}

const authReducer = (state = initialState, action) => {
  console.log("action:", action.user);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, name, email, guru, project } = action.user;
      return { ...state, currentUser: { id, name, email, guru, project } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};

export default authReducer
