var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LocationSchema   = new Schema({
    reference_number: String,
    name: String,
    address: String,
    state: String,
    county: String,
    city: String,
    primary_cert: String,
    primary_certdate: String,
    mulitple_property_name: String
});

module.exports = mongoose.model('Location', LocationSchema, 'locations');