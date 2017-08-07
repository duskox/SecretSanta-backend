var express = require('express');
var santaCtrl = require('./santaController');

var router = express.Router();

router.route('/').get(santaCtrl.postDefaultGETResponse);
router.route('/').post(santaCtrl.postDefaultPOSTResponse);

router.route('/register').post(santaCtrl.addUser);
router.route('/verify').post(santaCtrl.verifyToken);

router.route('/login').post();
router.route('/create').post();
router.route('/join').post();
router.route('/list').post();
router.route('/organisation').post();
router.route('/leave').post();

module.exports = router;
