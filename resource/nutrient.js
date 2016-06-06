import Database from '../database/adaptor/firebase';

export default class Nutrient extends Database {

  constructor(config) {
    super(config);
    this.ref = this.db.ref('nutrient');
  }

}
