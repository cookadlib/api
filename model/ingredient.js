import {dependencies} from 'needlepoint';

@dependencies(Config, Database)
export default class Ingredient {

  constructor(config, database) {
    this.config = config;

    this.config.term = 'ingredient';

    this.db = database;
  }

}
