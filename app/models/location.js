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


// {"reference_number":"01001296","resource_name":"Mount Sinai School","address":"1820 Cty. Rd. 57","state":"ALABAMA","county":"Autauga","city":"Prattville","primary_cert":"LI","primary_certdate":20011129,"multiple_property_name":"The Rosenwald School Building Fund and Associated Buildings MPS"},