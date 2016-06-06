import {container, singleton} from 'needlepoint';

import firebase from 'firebase';

@singleton
class Firebase {
  constructor() {
    this.configureDatabase();
  }

  configureDatabase() {
    // ... configure the database with the current configuration instance
    this.app = firebase.initializeApp({
      serviceAccount: this.config.serviceAccountPath,
      databaseURL: this.config.databaseURL
    });

    this.db = this.app.database();

    this.ref = this.db.ref(this.config.term);
  }

  async ref(id) {
    this.id = id;

    return this;
  }

  async id(id) {
    this.id = id;

    return this;
  }

  async findById(id) {
    await this.ref.child(id).on('value').then((snapshot) => {
      console.log(snapshot.val());
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async find(query) {
    if (query) {
      await this.ref.orderByChild(query).on('value').then((snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      }, (error) => {
        console.error(error);
        return error;
      });
    } else {
      await this.ref.on('value').then((snapshot) => {
        console.log(snapshot.val());
        return snapshot.val();
      }, (error) => {
        console.error(error);
        return error;
      });

    }
  }

  async findOne(query) {
    await this.ref.orderByChild(query).limitToFirst(1).on('value').then((snapshot) => {
      console.log(snapshot.val());
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async insert(documents) {
    await this.ref.set(documents).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async insertOne(document) {
    await this.ref.set(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async insertMany(documents) {
    await this.ref.set(documents).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async update(document) {
    await this.ref.child(this.id).update(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async updateOne(document) {
    await this.ref.child(this.id).update(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async updateMany(documents) {
    await this.ref.update(documents).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async replaceOne(document) {
    await this.ref.update(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async delete(id) {
    await this.ref.child(id).remove(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async deleteOne(id) {
    await this.ref.child(id).remove(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async deleteMany(id) {
    await this.ref.child(id).remove(document).then((snapshot) => {
      return snapshot.val();
    }, (error) => {
      console.error(error);
      return error;
    });
  }

  async sanitiseId(query) {
    return query.replace(/[.$\[\]#\/]/g, '_');
  }

}

export default Firebase;
