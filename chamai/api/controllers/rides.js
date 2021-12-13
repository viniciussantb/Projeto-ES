const rideModel = require('../models/ride');

module.exports.getRides = async (app, req, res) => {
    const rides = await rideModel.find();

    try{
        if(!rides){
            res.json({msg: "Não há caronas disponíveis..."})
        }else{
            console.log(rides);
            res.json(rides);
        }
    }catch(error){
        res.status(500).json({msg: "Internal Server Error..."});
    }
};

module.exports.saveRide = (app, req, res) => {
    const ride = rideModel(req.body);

    ride.save().then((data)=>{
        console.log(data);
        res.status(200).json(data);
    }).catch((error) => {
        console.log(error);
        res.status(500).json({msg: "Internal Server Error..."})
    });
};

module.exports.deleteRide = (app, req, res) => {
    const ObjectId = require('mongoose').Types.ObjectId;
    
    const query = {_id: ObjectId(req.body._id)};
    rideModel.deleteOne(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.status(200).json(result);
    })
}
