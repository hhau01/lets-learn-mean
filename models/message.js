var mongoose = require('mongoose');
// helper object to create blueprint of models
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String,required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);