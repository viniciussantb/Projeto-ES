const passengerModel = require('../models/passenger');

module.exports.getPassenger = (req, res) => {
    console.log(req.body.userEmail);
    passengerModel.findOne({userEmail: req.body.userEmail}, (err, result)=>{
        if(err) throw err;

        if(!result){
            res.status(200).json({msg: "Passenger not found..."});
            return
        }

        console.log(result);
        
        res.status(200).json(result);
    });

}

module.exports.getPassengerByIdRide = async (req, res) => {
    console.log(req.body.id_ride);
    
    passengerModel.find({id_ride: req.body.id_ride}, (err, result)=>{
        if(err) throw err;

        if(result.length < 0){
            res.status(200).json({msg: "Passenger not found..."});
            return
        }

        console.log(result);
        
        res.status(200).json(result);
    });

}

module.exports.savePassenger = (req, res) => {
    const passenger = passengerModel(req.body);

    passenger.save().then((data) => {
        console.log(data);
        res.status(200).json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({msg: "Internal Server Error..."})
    })
}