// ================================================================
// FIREBASE CONFIGURATION — REALTIME DATABASE
// ================================================================
// Go to Firebase Console > Project Settings > General > Your apps
// Copy your firebaseConfig object and paste it below.
// ================================================================

const firebaseConfig = {
      apiKey: "AIzaSyDVgP_Ma2TdLRw5luaDod8808L5x8We2Cg",
    authDomain: "e-commerce-3b0d8.firebaseapp.com",
    databaseURL: "https://e-commerce-3b0d8-default-rtdb.firebaseio.com",
    projectId: "e-commerce-3b0d8",
    storageBucket: "e-commerce-3b0d8.firebasestorage.app",
    messagingSenderId: "392057419128",
    appId: "1:392057419128:web:5fed61b34921efc25c048d"
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
