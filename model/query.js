import Database from '../database/adaptor/firebase';

export default class Query extends Database {

  constructor(config) {
    config.term = 'query';

    super(config);
  }

}
