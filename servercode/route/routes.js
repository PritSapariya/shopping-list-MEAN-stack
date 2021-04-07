var express = require('express');
var router = express.Router();

router.get('/test', (req, res, next) => {
    res.send("Testing Route")
});

router.post('/test', (req, res, next) => {
    // Do later
});

router.put('/test', (req, res, next) => {
    // Do later
});

router.delete('/test', (req, res, next) => {
    // Do later
});


module.exports = router;