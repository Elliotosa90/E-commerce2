// ================================================================
// FIREBASE CONFIGURATION — REALTIME DATABASE
// ================================================================
// Go to Firebase Console > Project Settings > General > Your apps
// Copy your firebaseConfig object and paste it below.
// ================================================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
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
