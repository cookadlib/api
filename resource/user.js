import Database from '../database/adaptor/firebase';

export default class User extends Database {

  constructor(config) {
    super(config);
    this.ref = this.db.ref('user');
  }

}
