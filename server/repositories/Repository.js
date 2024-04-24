const BaseRepository = require('./BaseRepository');

class Repository extends BaseRepository {
  constructor(session) {
    super('species', session);
  }

  async getAll(tableName, columnName) {
    const result = await this._session
      .select(columnName)
      .from(tableName);

    return result.map(row => row[columnName]);
  }
}

module.exports = Repository;
