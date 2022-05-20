const AuthorController = require ('../controller/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthorById);
    app.post('/api/authors', AuthorController.createAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
};