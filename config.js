// ================================================================
// FIREBASE CONFIGURATION — REALTIME DATABASE
// ================================================================
// Go to Firebase Console > Project Settings > General > Your apps
// Copy your firebaseConfig object and paste it below.
// ================================================================

const firebaseConfig = {
  apiKey: "AIzaSyChmSRWhcXqSHZiqpF5tC6_xv5H-FkFO6g",
  authDomain: "store-47697.firebaseapp.com",
  databaseURL: "https://store-47697-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "store-47697",
  storageBucket: "store-47697.firebasestorage.app",
  messagingSenderId: "1035832738234",
  appId: "1:1035832738234:web:ea4b7cd696d80be04d9d83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const database = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

// Reference helpers
const productsRef = database.ref('products');
const ordersRef = database.ref('orders');
