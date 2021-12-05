var Nieuwtjes = require('../models/nieuwtjes');
var async = require('async');

// Display list of all nieuwtjes.
exports.nieuwtjes_list = function(req, res) {
    Nieuwtjes.find()
        .sort([['datum', 'descending']])
        .exec(function (err, list_nieuwtjes) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('home', {title: 'Nieuwtjes List',
                                nieuwtjes_list: list_nieuwtjes,
                                titel: "Scouts Grimmertinge",
            });
        });
};
