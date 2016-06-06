import Database from '../database/adaptor/firebase';

export default class Query extends Database {

  constructor(config) {
    super(config);
    this.ref = this.db.ref('query');
  }

}
