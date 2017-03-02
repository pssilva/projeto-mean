var users = require('../controllers/users.server.controller'),
    articles = require('../controllers/articles.server.controller');

module.exports = function(app) {
    app.route('/api/articles')
       .get(articles.list)
       .post(users.requiresLogin, articles.create);

    app.route('/api/articles/:articlesId')
        .get(articles.read)
        .put(users.requiresLogin, articles.hasAuthorization, articles.update)
        .delete(users.requiresLogin, articles.hasAuthorization, articles.delete);

    app.param('articlesId', articles.articlesByID);
};