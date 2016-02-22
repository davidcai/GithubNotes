const api = {

  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },

  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },

  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  }
};


export default api;
