import Database from '../database/adaptor/firebase';

export default class Recipe extends Database {

  constructor(config) {
    super(config);
    this.ref = this.db.ref('recipe');
  }

}
