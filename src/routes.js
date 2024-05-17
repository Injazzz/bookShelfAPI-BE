const { 
    add_BooksHandler, 
    getAll_BooksHandler,
    getBookById_BooksHandler,
    editBookById_BooksHandler,
    deleteBookById_BooksHandler
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: add_BooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAll_BooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById_BooksHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookById_BooksHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookById_BooksHandler,
    }
];

module.exports = routes;