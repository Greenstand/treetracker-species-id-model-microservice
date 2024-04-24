const Repository = require('../repositories/Repository');

class SpeciesModel {
  constructor(session) {
    this._speciesRepository = new Repository(session);
  }

  async get(filter, limitOptions) {
    return this._speciesRepository.getByFilter(filter, limitOptions);
  }

  async getAllImageUrls(limitOptions) {
    return this._speciesRepository.getAll('images', 'url');
  }
}

module.exports = SpeciesModel;
