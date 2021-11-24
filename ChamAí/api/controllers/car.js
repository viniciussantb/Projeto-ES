module.exports.getCar = (req, res) => {
    const carModel = require('../models/car');
    const userEmail = req.body;

    carModel.findOne(userEmail, (err, result)=>{
        if (err) throw err;

        if(!result){
            res.status(200).json({msg: "No car found..."});
            return
        }

        console.log(result);

        res.status(200).json(result);
    });
}

module.exports.saveCar = (req, res) => {
    const carModel = require('../models/car');
    const car = carModel(req.body);

    car.save().then((data) => {
        console.log(data);
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg: "Internal Server Error..."});
    })
}