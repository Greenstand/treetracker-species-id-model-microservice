const express = require('express');
const { speciesHandlerGet } = require('../handlers/speciesHandler');

const router = express.Router();
router.get('/images', speciesHandlerGet);
module.exports = router;
