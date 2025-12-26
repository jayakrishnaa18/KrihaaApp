import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: 'kriha-9db30.firebaseapp.com',
  projectId: 'kriha-9db30',
  storageBucket: 'kriha-9db30.firebasestorage.app',
  messagingSenderId: '980332560414',
  appId: '1:980332560414:web:8ac71b677e4125a0d82e0f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firestore, auth };
export default app;
