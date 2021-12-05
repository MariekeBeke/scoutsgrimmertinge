const { DateTime } = require("luxon");
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NieuwtjesSchema = new Schema(
    {
        titel: {type: String, required: true, maxLength: 100},
        tekst: {type: String, required: true},
        datum: {type: Date, required: true},
        foto_link: {type: String, required: true}
    }
);

// Virtual for nieuwtjes' URL
NieuwtjesSchema
    .virtual('url')
    .get(function () {
        return '/home/nieuwtjes/' + this._id;
    });

NieuwtjesSchema
    .virtual('datum_van_schrijven')
        .get(function () {
            return DateTime.fromJSDate(this.datum).toLocaleString(DateTime.DATE_MED);
        });

//Export model
module.exports = mongoose.model('nieuwtjes', NieuwtjesSchema);
