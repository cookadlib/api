import Bookshelf from 'bookshelf';
import Knex from 'knex';

import config from '../../config/config';

const knex = Knex(config.mysql);

const bookshelf = Bookshelf(knex);

class Mysql extends Config {
  constructor() {
    this.configureDatabase();
  }

  configureDatabase() {
    this.model = bookshelf.Model.extend({
      tableName: this.config.term
    });
  }

}

export default Mysql;
