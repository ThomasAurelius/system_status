const express = require('express');
const router = express.Router();
const {getSystems, setSystem, updateSystem, deleteSystem} = require('../controllers/systemController');


router.route('/').get(getSystems).post(setSystem);

router.route('/:id').delete(deleteSystem).put(updateSystem);


module.exports = router