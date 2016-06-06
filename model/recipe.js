import Database from '../database/adaptor/firebase';

export default class Recipe extends Database {

  constructor(config) {
    config.term = 'recipe';

    super(config);
  }

}
