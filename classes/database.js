import firebase from 'firebase';

import Config from './config';

class Database extends Config {
  constructor() {
    super();
    this.configureDatabase();
  }

  configureDatabase() {
    // ... configure the database with the current configuration instance
    this.app = firebase.initializeApp({
      serviceAccount: this.config.serviceAccountPath,
      databaseURL: this.config.databaseURL
    });

    this.db = this.app.database();
  }

  async find(id) {
    if (id) {
      return this.ref.child(id).once('value').then((snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      }, (error) => {
        console.error(error);
        return error;
      });
    } else {
      return this.ref.once('value').then((snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      }, (error) => {
        console.error(error);
        return error;
      });
    }
  }

  insert(id, value) {
    return this.ref.child(id).push().set(value).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  insertOne(id, value) {

  }

  insertMany(id, value) {

  }

  update(id, value) {
    return this.ref.child(id).update(value).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  updateOne(id, value) {

  }

  updateMany(id, value) {

  }

  ReplaceOne(id, value) {

  }

  delete(id) {

  }

  deleteOne(id) {

  }

  deleteMany(id) {

  }

  sanitiseId(query) {
    return query.replace(/[.$\[\]#\/]/g, '_');
  }

}

export default Database;
