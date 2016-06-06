import Database from '../database/adaptor/firebase';

export default class Dish extends Database {

  constructor(config) {
    config.term = 'dish';

    super(config);
  }

}
