const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getWithToken = (url) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const updateWithToken = (url, user) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
}

const updateUser = (user) => {
  return updateWithToken(`${API_ROOT}/users/${user.id}`, user)
}

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const getAllUsers = () => {
  return getWithToken(`${API_ROOT}/users`)
}

const login = data => {
  // updateUser(data)
  return fetch(`${API_ROOT}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const register = data => {
  return fetch(`${API_ROOT}/sign_up`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export const adapter = {
  auth: {
    register,
    login,
    updateUser,
    getCurrentUser,
    getAllUsers
  }
};

// ---------------------------------NAT-------------------------------
// //Adapters allow us to abstract out repetitive code, such as the base url and headers
// const baseUrl = `http://localhost:3000`;
//
// function headers() {
//   return {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   };
// }
//
// export class RestfulAdapter {
//   static indexFetch(route) {
//     return fetch(`${baseUrl}/${route}`, getRequest()).then(responseHandler);
//   }
//   static showFetch(route, id) {
//     return fetch(`${baseUrl}/${route}/${id}`, getRequest()).then(
//       responseHandler
//     );
//   }
//   static createFetch(route, body) {
//     return fetch(`${baseUrl}/${route}`, postRequest(body)).then(
//       responseHandler
//     );
//   }
//   static editFetch(route, id, body) {
//     return fetch(`${baseUrl}/${route}/${id}`, patchRequest(body)).then(
//       responseHandler
//     );
//   }
//   static deleteFetch(route, id) {
//     return fetch(`${baseUrl}/${route}/${id}`, {
//       method: "DELETE",
//       headers: headers()
//     }).then(responseHandler);
//   }
// }
//
// //these may not be necessary, but if you're setting up a variety of get, post,
// //and patch requests, it may be helpful to abstract their structure as well:
// function getRequest() {
//   return {
//     headers: headers()
//   };
// }
//
// function patchRequest(body) {
//   return {
//     method: "PATCH",
//     headers: headers(),
//     body: JSON.stringify(body)
//   };
// }
//
// function postRequest(body) {
//   return {
//     method: "POST",
//     headers: headers(),
//     body: JSON.stringify(body)
//   };
// }
//
// //this is a very basic error handling function.  API responses come with a key,
// //response.ok, which will be true if the status is below 400 and false if above.
// function responseHandler(response) {
//     if (response.ok) {
//       return response.json();
//     } else {
//       console.log("ERROR", response.json());
//     }
// }
