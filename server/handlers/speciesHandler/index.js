const Service = require('../../services/Service');
const HttpError = require('../../utils/HttpError');
const {
  getFilterAndLimitOptions,
  generatePrevAndNext,
} = require('../../utils/helper');
const {
  speciesIdParamSchema,
  speciesPatchSchema,
  speciesPostSchema,
  speciesQuerySchema,
} = require('./schemas');

const speciesHandlerGet = async (req, res) => {
  await speciesQuerySchema.validateAsync(req.query, {
    abortEarly: true,
  });

  const { filter, limitOptions } = getFilterAndLimitOptions(req.query);

  const speciesService = new Service();
  const { speciess, count } = await speciesService.get(
    filter,
    limitOptions,
  );

  const url = 'species';

  const links = generatePrevAndNext({
    url,
    count,
    limitOptions,
    queryObject: { ...filter, ...limitOptions },
  });

  res.send({
    speciess,
    links,
    count,
    query: { ...limitOptions, ...filter },
  });
};

const speciesHandlerPost = async (req, res) => {
  await speciesPostSchema.validateAsync(req.body, { abortEarly: false });

  const speciesService = new Service();
  const species = await speciesService.create(req.body);

  res.send(species);
};

const speciesHandlerPatch = async (req, res) => {
  await speciesIdParamSchema.validateAsync(req.params);
  await speciesPatchSchema.validateAsync(req.body, { abortEarly: false });
  const speciesId = req.params.species_id;

  const speciesService = new Service();
  const species = await speciesService.update({
    id: speciesId,
    ...req.body,
  });

  res.send(species);
};

const speciesHandlerSingleGet = async (req, res) => {
  await speciesIdParamSchema.validateAsync(req.params);
  const speciesId = req.params.species_id;

  const speciesService = new Service();
  const species = await speciesService.getById(speciesId);

  if (!species) {
    throw new HttpError(404, `species with ${speciesId} not found`);
  }

  res.send(species);
};

module.exports = {
  speciesHandlerGet,
  speciesHandlerPost,
  speciesHandlerSingleGet,
  speciesHandlerPatch,
};
