module.exports = (app) => {
    app.post('/gettodos', (req, res) => {
        app.controllers.todo.gettodos(app, req, res);
    });

    app.post('/todo', (req, res) => {
        app.controllers.todo.saveTodo(app, req, res);
    })
}
