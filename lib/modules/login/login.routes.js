module.exports = [
  {
    method: 'GET',
    path: '/login/{userID}',
    handler: require('./get.login.controller')
  },
  {
    method: 'POST',
    path: '/login',
    handler: require('./post.login.controller')
  }

];
