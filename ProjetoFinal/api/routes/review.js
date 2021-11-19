module.exports = (app) => {
    app.post('/reviews', (req, res)=>{
        app.controllers.review.getReviews(req, res);
    });

    app.post('/reviewed', (req, res)=>{
        app.controllers.review.getReviewed(req, res);
    });

    app.post('/saveReview', (req, res)=>{
        app.controllers.review.saveReview(req, res);
    });

    app.delete('/deleteReview', (req, res)=>{
        app.controllers.review.deleteReview(req, res);
    })
}