let express = require('express');
let router = express.Router();

router.get('/recipes', function(req, res, next) {
    res.send('recipes page');
});

module.exports = router;
