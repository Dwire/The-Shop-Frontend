// import {SET_CURRENT_USER, LOGOUT_USER} from '../actions/types'

const initialState = {
   currentUser: {},
   localUsers: []
}

const authReducer = (state = initialState, action) => {
  console.log("action.payload:", action);
  // debugger
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, name, email, guru, project } = action.payload;
      return { ...state, currentUser: { id, name, email, guru, project } };
    case 'SET_CURRENT_USERS':
      return { ...state, localUsers: action.payload}
    case 'LOGOUT_USER':
      return { ...state, currentUser: {}, localUsers: [] };
    default:
      return state;
  }
};

export default authReducer
