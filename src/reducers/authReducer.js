// import {SET_CURRENT_USER, LOGOUT_USER} from '../actions/types'

const initialState = {
   currentUser: {},
   localUsers: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      // console.log("CUUUUUUR:", action.payload);
      const { id, name, email, guru, project, longitude, latitude } = action.payload;
      return { ...state, currentUser: { id, name, email, guru, project, longitude, latitude} };
    case 'SET_CURRENT_USERS':
      console.log("PD", action.payload);
      return { ...state, localUsers: action.payload}
    case 'LOGOUT_USER':
      return { ...state, currentUser: {}, localUsers: [] };
    default:
      return state;
  }
};

export default authReducer
