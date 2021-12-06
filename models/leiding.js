var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeidingSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        family_name: {type: String, required: true, maxLength: 100},
        totemnaam: {type: String, required: true, maxLength: 100},
        date_of_birth: {type: Date},
        groep: {type: String, enum: ['Kabouters', 'Kapoenen', 'Jonggidsen', 'Gidsen',], required: true, maxLength: 100},
        gsm: {type: String, required: true, maxLength: 100},
        foto: {type: String, required: true},
        is_groeps: {type: Boolean, required: true, maxLength: 100},
    }
);

// Virtual for leiding's full name
LeidingSchema
    .virtual('naamLeiding')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });

LeidingSchema
    .virtual('gsmLeiding')
    .get(function () {
        return this.gsm;
    });

LeidingSchema
    .virtual('groepLeiding')
    .get(function () {
        return this.groep;
    });

// Virtual for author's URL
LeidingSchema
    .virtual('url')
    .get(function () {
        return '/contact/leiding/' + this._id;
    });

//Export model
module.exports = mongoose.model('leiding', LeidingSchema);
