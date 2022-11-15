let express = require('express');
let router = express.Router();
let dbCon = require('../lib/db');

// display pills page
router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM pills ORDER BY id asc', (err, rows) => {
        if (err) {
            req.flash('error', err);
            res.render('pills', { data: '' });
        } else {
            res.render('pills', { data: rows });
        }
    })
})

module.exports = router;