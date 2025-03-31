import admin from 'firebase-admin';
const serviceAccount = require('../serviceAccountKey.json');
import { firebaseConfig } from './firebaseConfig';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

const bucket = admin.storage().bucket();

export default bucket;
