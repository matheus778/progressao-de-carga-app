import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASwuwZNUdWjsONzabalVFSna5g2oIlizY",
  authDomain: "progressao-de-carga-app.firebaseapp.com",
  projectId: "progressao-de-carga-app",
  storageBucket: "progressao-de-carga-app.appspot.com",
  messagingSenderId: "781040639651",
  appId: "1:781040639651:web:48907e1419b1db4bffa916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app as firebaseApp}