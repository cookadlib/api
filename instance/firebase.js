import firebase from 'firebase';

import * as config from '../config';

firebase.initializeApp({
  databaseURL: config.firebase.databaseURL,
  serviceAccount: config.firebase.serviceAccountCredentialsPath
});

export const db = firebase.database();

export function sanitiseId(query) {
  return query.replace(/[.$\[\]#\/]/g, '_');
}

export default firebase;
