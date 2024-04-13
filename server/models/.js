const Repository = require('../repositories/Repository');

class Model {
  constructor(session) {
    this._speciesRepository = new Repository(session);
  }

  async get(filter, limitOptions) {
    return this._speciesRepository.getByFilter(filter, limitOptions);
  }

  async create(speciesObject) {
    return this._speciesRepository.create(speciesObject);
  }

  async update(speciesObject) {
    return this._speciesRepository.update(speciesObject);
  }

  async getById(speciesId) {
    return this._speciesRepository.getById(speciesId);
  }
}

module.exports = Model;
