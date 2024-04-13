const BaseRepository = require('./BaseRepository');

class Repository extends BaseRepository {
  constructor(session) {
    super('species', session);
  }
}

module.exports = Repository;
