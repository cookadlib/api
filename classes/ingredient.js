import Database from './database';

export default class Ingredient extends Database {

  constructor() {
    super();
    this.ref = this.db.ref('ingredients');
  }

}
