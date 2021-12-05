var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LidSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        family_name: {type: String, required: true, maxLength: 100},
        date_of_birth: {type: Date},
        groep: {type: String, required: true, mexLength:20},
        gsm_ouder: {type: String, required: true, maxLength: 100},
        email_ouder: {type: String, required: true, maxLength: 100},
    }
);

// Virtual for lid's full name
LidSchema
    .virtual('name')
    .get(function () {
        return this.family_name + ', ' + this.first_name;
    });

LidSchema
    .virtual('gsm_ouderLid')
    .get(function () {
        return this.gsm_ouder;
    });

LidSchema
    .virtual('email_ouderLid')
    .get(function () {
        return this.email_ouder;
    });

LidSchema
    .virtual('groepLid')
    .get(function () {
        return this.groep;
    });

LidSchema
    .virtual('url')
    .get(function () {
            return '/werking/inschrijven/lid' + this._id;
    });

//Export model
module.exports = mongoose.model('lid', LidSchema);
