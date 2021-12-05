var Leiding = require('../models/leiding');
var async = require('async');

// Display list of groepsleiding
exports.groepsleiding_list = function(req, res) {
    Leiding.find()
        .where('is_groeps').equals('true')
        .sort([['first_name', 'ascending']])
        .exec(function (err, list_groepsleiding) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('contact/groepsleiding', {
                groepsleiding_list: list_groepsleiding,
                titel: "Groepsleiding"
            });
        });
};

// Display list of kapoenenleiding
exports.kapoenenleiding_list = function(req, res) {
    Leiding.find()
        .where('groep').equals('Kapoenen')
        .sort([['first_name', 'ascending']])
        .exec(function (err, list_kapoenenleiding) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('contact/kapoenenleiding', {
                kapoenenleiding_list: list_kapoenenleiding,
                titel: "Kapoenenleiding"
            });
        });
};

// Display list of kabouterleiding
exports.kabouterleiding_list = function(req, res) {
    Leiding.find()
        .where('groep').equals('Kabouters')
        .sort([['first_name', 'ascending']])
        .exec(function (err, list_kabouterleiding) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('contact/kabouterleiding', {
                kabouterleiding_list: list_kabouterleiding,
                titel: "Kabouterleiding",
            });
        });
};

// Display list of jonggidsenleiding
exports.jonggidsenleiding_list = function(req, res) {
    Leiding.find()
        .where('groep').equals('Jonggidsen')
        .sort([['first_name', 'ascending']])
        .exec(function (err, list_jonggidsenleiding) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('contact/jonggidsenleiding', {
                jonggidsenleiding_list: list_jonggidsenleiding,
                titel: "Jonggidsenleiding"
            });
        });
};

// Display list of gidsenleiding
exports.gidsenleiding_list = function(req, res) {
    Leiding.find()
        .where('groep').equals('Gidsen')
        .sort([['first_name', 'ascending']])
        .exec(function (err, list_gidsenleiding) {
            if (err) { return next(err); }
            //Successful, so render
            res.render('contact/gidsenleiding', {
                gidsenleiding_list: list_gidsenleiding,
                titel: "Gidsenleiding",
            });
        });
};