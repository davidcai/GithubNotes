const api = {

  getBio(username) {
    username = username.toLowercase().trim();
    var url = 'https://api.github.com/users/${username}';
    fetch(url)
    .then(res => res.json());
  }
};

export default api;
