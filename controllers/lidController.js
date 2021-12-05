var Lid = require('../models/lid');
var async = require('async');
const { body,validationResult } = require('express-validator');

// Display lid create form on GET.
exports.lid_create_get = function(req, res, next) {
    async.parallel({
        lid_count: function (callback) {
            Lid.countDocuments({}, callback);
        },
        }, function(err, results) {
            res.render('werking/inschrijven', {
                titel: 'Inschrijven',
                error: err,
                data: results,
            });
    });
};

// Handle lid create on POST.
exports.lid_create_post = [
    // Validate and sanitize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('Voornaam moet worden gespecifieerd'),
    body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Achternaam moet worden gespecifieerd'),
    body('date_of_birth', 'Ongeldinge geboorte datum').optional({ checkFalsy: true }).isISO8601().toDate(),
    body('groep', 'Ongeldige groep').trim().isLength({ min: 1 }).escape().withMessage('Groep moet worden gespecifieerd'),
    body('gsm_ouder', 'Ongeldig telefoon nummer').trim().isLength({ min: 1 }).escape().withMessage('GSM-nummer moet worden gespecifieerd'),
    body('email_ouder', 'Ongeldig e-mail adres').trim().isLength({ min: 1 }).escape().withMessage('Email moet worden gespecifieerd'),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            console.log('opnieuw inschrijven: ');
            res.render('werking/inschrijven',  { titel: 'Lid inschrijven', lid: req.body, errors: errors.array() });
        }
        else {
            // Create Lid object with escaped and trimmed data
            var lid = new Lid({
                first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                groep: req.body.groep,
                gsm_ouder: req.body.gsm_ouder,
                email_ouder: req.body.email_ouder,
            });

            // Data from form is valid -> save
            lid.save(function (err) {
                if (err) { console.log('Fout bij het inschrijven: '); return next(err); }
                // Successful - redirect to new lid record.
                else {
                    console.log('Inschrijven: ');
                    res.redirect('/inschrijven_bevestiging');
                }
            });
        }
    }
];
// Display lid update form on GET.
exports.lid_update_get = function(req, res, next) {
    Lid.findById(req.params.id, function (err, lid) {
        if (err) { console.log('Fout bij het updaten: '); return next(err); }
        if (lid == null) { // No results.
            var err = new Error('lid niet gevonden');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.redirect('werking/inschrijven_bevestiging', { title: 'Lid geupdated', lid: lid });

    });
};

// Handle lid update on POST.
exports.lid_update_post = function(req, res, next) {
    // Validate and santize fields.
    body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters.'),
        body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.')
            .isAlphanumeric().withMessage('Family name has non-alphanumeric characters.'),
        body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true }).isISO8601().toDate(),
        body('groep', 'Invalid group').trim().isLength({ min: 1 }).escape().withMessage('Group must be specified.')
            .isAlphanumeric().withMessage('Group has non-alphanumeric characters.'),
        body('gsm_ouder', 'Invalid number parent').trim().isLength({ min: 1 }).escape().withMessage('Number must be specified.')
            .isNumeric().withMessage('Number has non-alphanumeric characters.'),
        body('email_ouder', 'Invalid e-mail address').trim().isLength({ min: 1 }).escape().withMessage('Email must be specified.')
            .withMessage('Email has non-alphanumeric characters.'),

        // Process request after validation and sanitization.
        (req, res, next) => {

            // Extract the validation errors from a request.
            const errors = validationResult(req);

            // Create Author object with escaped and trimmed data (and the old id!)
            var lid = new Lid(
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    groep: req.body.groep,
                    gsm_ouder: req.body.gsm_ouder,
                    email_ouder: req.body.email_ouder,
                }
            );

            if (!errors.isEmpty()) {
                // There are errors. Render form again with sanitized values/errors messages.
                const data = {
                    titel: "Inschrijven",
                }
                res.render('werking/inschrijven', { titel: 'Inschrijven', lid: req.body, errors: errors.array() });
            }
            else {
                // Data from form is valid. Update the record.
                Lid.findByIdAndUpdate(req.params.id, lid, {}, function (err, thelid) {
                    if (err) { return next(err); }
                    // Successful - redirect to genre detail page.
                    const data = {
                        titel: "Inschrijven bevestigd",
                    }
                    res.redirect('werking/inschrijven_bevestiging', titel);
                });
            }
        }
};
