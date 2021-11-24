const reviewModel = require('../models/review');

module.exports.getReviews = (req, res) => {

    reviewModel.find({userEmail : req.body.userEmail}, (err, result)=>{
        if(err) throw err;

        if(result.length === 0){
            res.status(200).json({msg: "No reviews found..."});
            return
        }
        console.log(result);
        res.status(200).json(result);
    })
}

module.exports.getReviewed = (req, res) => {
    console.log(req.body.userEmailReviwed);

    reviewModel.find({userEmailReviwed : req.body.userEmailReviwed}, (err, result)=>{
        if(err) throw err;

        if(result.length === 0){
            res.status(200).json({msg: "No reviews found..."});
            return
        }
        console.log(result);
        res.status(200).json(result);
    })
}

module.exports.saveReview = (req, res) => {
    const review = reviewModel(req.body);

    review.save().then((data)=>{
        console.log(data);
        res.status(200).json(data);
    }).catch((err)=>{
        console.log(err.message);
        res.status(400).json(err.message);
    });
}

module.exports.deleteReview = (req, res) => {
    // alterar o rating do user ??

    const ObjectId = require('mongoose').Types.ObjectId;
    const query = {_id: ObjectId(req.body._id)};

    reviewModel.deleteOne(query, (err, result)=>{
        if(err) throw err;
        
        console.log(result);
        res.status(200).json(result);
    });
}