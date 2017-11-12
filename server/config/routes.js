var score = require('../controllers/scores.js');
var path = require('path');

module.exports = function (app){
    console.log("in routes");

    app.get('/api/scores', function (req, res){
        console.log("in get req")
        score.showScores(req, res);
    });

    app.get('/api/questions', function (req, res){
        console.log("in get req")
        score.showQuestions(req, res);
    });

    app.post('/api/scores/create', function (req, res){
        console.log("in routes.js post add")
        score.addScore(req, res);
    });

    app.post('/api/questions/create', function (req, res){
        console.log("in routes.js post create")
        score.create(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./TriviaApp/dist/index.html"))
    });
}
