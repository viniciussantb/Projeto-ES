module.exports = (app) => {
    app.get('/rides', (req, res) => {
        app.controllers.rides.getRides(app, req, res);
    });

    app.post('/rides', (req, res) => {
        app.controllers.rides.saveRide(app, req, res);
    });

    app.delete('/rides', (req, res) => {
        app.controllers.rides.deleteRide(app, req, res);
    });
}