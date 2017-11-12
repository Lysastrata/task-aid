var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    buisnessName: { type: String, required: true},
    type: { type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cellphone:{type: Number, required: true},
    website: {type: String, required: true},
    zipcode: {type: Number, required: true},
    _templates: [{type: Schema.Types.ObjectId, ref: 'Template'}]
});
var User = mongoose.model('User', UserSchema);

var TemplateSchema = new mongoose.Schema({
    name: { type: String, required: true},
    nodes: [{type: Object}],
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});
var Template = mongoose.model('Template', TemplateSchema);

