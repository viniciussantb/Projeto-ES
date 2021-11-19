module.exports = (app) => {
    app.post('/passenger', (req, res) => {
        app.controllers.passenger.getPassenger(req, res);
    });

    app.post('/savePassenger', (req, res) => {
        app.controllers.passenger.savePassenger(req, res);
    });

    app.post('/passengerByIdRide', (req, res) => {
        app.controllers.passenger.getPassengerByIdRide(req, res);
    });
}