module.exports = (app) => {
    app.get('/todo', (req, res) => {
        app.controllers.todo.todo(app, req, res);
    });

    app.post('/todo', (req, res) => {
        app.controllers.todo.saveTodo(app, req, res);
    })
}
