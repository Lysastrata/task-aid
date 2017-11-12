var mongoose = require('mongoose');
var User = mongoose.model('User');
var Template = mongoose.model('Template');
var gcal = require('google-calendar');
var google_calendar = new gcal.GoogleCalendar(ya29.GlsCBXRcslUYEjvwGMpnDaKjU7OKnIuVIms9WaxMNZR-FACjQrdYoUNnF1rbbXgZ7GRizYs_Zs9TmV4wz6_yhJ7IAFz9ochMOH7zv_V0iIfrZj_2awZlcL4OfWP7);



module.exports = {
    createTemplate: function (req, res){
        var newTemplate = new Template(req.body);
        console.log("im inside users create templates", req.body)
        newTemplate.save(function (err, data){
            if(err) {
                console.log(err);
                res.status(400).json({message:"unable to add template"});
            }
            console.log("successful post:", data)
            res.json();
        })
    },
    showAllTemplates: function (req, res){
        Template.find({_user = req.params.user}, function (err, templates){
        if(!err){
            console.log("successful loaded all inside the server users show templates ");
            console.log(templates);
            res.json(templates);
        }
        else{
            console.log("error");
            console.log(err);
            res.json(err);
        }
        })
    },
    editTemplate: function (req, res){
        Template.findByIdAndUpdate(req.params.id, req.body, function(err){
            if(err){
                console.log("error");
                console.log(err);
                res.json(err);
            }
        })
    },
    showOneTemplate: function(req, res){
        Template.findById(req.params.id, function (err, template){
            if(!err){
                console.log("successful loaded all inside the server users show templates ");
                console.log(template);
                res.json(template);
            }
            else{
                console.log("error");
                console.log(err);
                res.json(err);
            }
            })
        },
    createEvent: function(req, res){
        Template.findById(req.params.id, function (err, template){
            for (var node in template.nodes) {
                var date = moment().subtract(node.daysBefore, 'days');
                var correctDate = moment(""+date, "YYYY-MM-DD");
                GoogleCalendar.events.insert(primary, function(err){
                       if(!err){
                          res.json( {
                            "start": {
                              "date": correctDate
                            },
                            "summary": node.name
                       })
                    }
                })
            }
        })
        }
}