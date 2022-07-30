import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRwIaAg8-fJwbuXUAJBjOGj33YVsIuD80',
  authDomain: 'login--jvsm.firebaseapp.com',
  projectId: 'login--jvsm',
  storageBucket: 'login--jvsm.appspot.com',
  messagingSenderId: '308596555179',
  appId: '1:308596555179:web:ddaed770e4def76098e6ee'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);