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

const postWithToken = (url, post) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(post)
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

const createPost = post => {
  return postWithToken(`${API_ROOT}/posts`, post)
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
    getAllUsers,
    createPost
  }
};
