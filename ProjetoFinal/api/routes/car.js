module.exports = (app) => {
    app.post('/car', (req, res) => {
        app.controllers.car.getCar(req, res);
    });

    app.post('/saveCar', (req, res) => {
        app.controllers.car.saveCar(req, res);
    });
}