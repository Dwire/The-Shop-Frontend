// import {SET_CURRENT_USER, LOGOUT_USER} from '../actions/types'

const initialState = {
   currentUser: {},
   localUsers: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      console.log("CUUUUUUR:", action.payload);
      const { id, name, email, guru, project, longitude, latitude } = action.payload;
      return { ...state, currentUser: { id, name, email, guru, project, longitude, latitude} };
    case 'SET_CURRENT_USERS':
      return { ...state, localUsers: action.payload}
    case 'SET_CURRENT_USER_POST':
      const localUserArray = state.localUsers
      const usersPost = localUserArray.find(function(user){
        return user.id === action.payload.user.id
      })
      return {...state.localUsers, }
      console.log("USER:", usersPost);
      // return { ...state, localUsers: [{id: action.payload.id, body: action.payload.body, title: action.payload.title, topic: action.payload.topic}]  }
      break
    case 'LOGOUT_USER':
      return { ...state, currentUser: {}, localUsers: [] };
    default:
      return state;
  }
};

export default authReducer
