const Joi = require('joi');

const speciesPostSchema = Joi.object({});

const speciesQuerySchema = Joi.object({});

const speciesIdParamSchema = Joi.object({});

const speciesPatchSchema = Joi.object({});

module.exports = {
  speciesIdParamSchema,
  speciesPatchSchema,
  speciesPostSchema,
  speciesQuerySchema,
};
