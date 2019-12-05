let express = require('express');
let router = express.Router();

router.get('/search', function(req, res, next) {
    res.send('search page');
});

module.exports = router;
