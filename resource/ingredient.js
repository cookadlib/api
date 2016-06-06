import Database from '../database/adaptor/firebase';

export default class Ingredient extends Database {

  constructor(config) {
    super(config);
    this.ref = this.db.ref('ingredient');
  }

}
