const express = require('express');

const router = express.Router();
const { handlerWrapper } = require('../utils/utils');

const {
  speciesHandlerGet,
  speciesHandlerPost,
  speciesHandlerSingleGet,
  speciesHandlerPatch,
} = require('../handlers/speciesHandler');

router
  .route('/species')
  .get(handlerWrapper(speciesHandlerGet))
  .post(handlerWrapper(speciesHandlerPost));

router
  .route('/species/:species_id')
  .get(handlerWrapper(speciesHandlerSingleGet))
  .patch(handlerWrapper(speciesHandlerPatch));

module.exports = router;
