const Model = require('../models/SpeciesModel');
const Session = require('../infra/database/Sessions/Session');

class Service {
  constructor() {
    this._session = new Session();
    this._speciesModel = new Model(this._session);
  }

  async get(filter, limitOptions) {
    return this._speciesModel.get(filter, limitOptions);
  }

  async create(speciesObject) {
    try {
      await this._session.beginTransaction();
      const response = await this._speciesModel.create(
        speciesObject,
      );
      await this._session.commitTransaction();

      return response;
    } catch (e) {
      if (this._session.isTransactionInProgress()) {
        await this._session.rollbackTransaction();
      }
      throw e;
    }
  }

  async update(speciesObject) {
    try {
      await this._session.beginTransaction();
      const response = await this._speciesModel.update(
        speciesObject,
      );
      await this._session.commitTransaction();

      return response;
    } catch (e) {
      if (this._session.isTransactionInProgress()) {
        await this._session.rollbackTransaction();
      }
      throw e;
    }
  }

  async getById(speciesId) {
    return this._speciesModel.getById(speciesId);
  }
}

module.exports = Service;
