import Database from '../database/adaptor/firebase';

export default class User extends Database {

  constructor(config) {
    config.term = 'user';

    super(config);
  }

}
