var users = require('../controllers/users.js');
var path = require('path');

module.exports = function (app){
    console.log("in routes");

    app.get('/api/templates', function (req, res){
        console.log("in get req templates")
        users.showAllTemplates(req, res);
    });
    
    app.post('/api/templates', function (req, res){
        console.log("in post templates")
        users.createTemplate(req, res);
    });

    app.get('/api/template', function(req, res){
        console.log("in get template")
        users.showOneTemplate(req, res);
    })
    app.post('/api/template/:id', function(req, res){
        console.log("in post template")
        users.editTemplate(req, res);
    })

    app.get('/*', function (req, res) {
        res.sendFile('index.html');
      });
}
