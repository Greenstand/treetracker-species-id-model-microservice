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

  async getAllImageUrls() {
    return this._speciesModel.getAllImageUrls();
  }


}

module.exports = Service;
