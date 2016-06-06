import Database from '../database/adaptor/firebase';

export default class Nutrient extends Database {

  constructor(config) {
    config.term = 'nutrient';

    super(config);
  }

}
