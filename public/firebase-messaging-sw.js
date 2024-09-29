importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')
// // Initialize the Firebase app in the service worker by passing the generated config 

const firebaseConfig = {
  apiKey: "AIzaSyBjM2yx21lCFq8mRyUSo9fyT55AncuO-MA",
  authDomain: "pharm-news.firebaseapp.com",
  projectId: "pharm-news",
  storageBucket: "pharm-news.appspot.com",
  messagingSenderId: "774331368225",
  appId: "1:774331368225:web:9c2a194b158ac7032f3460",
  measurementId: "G-254Q43Q2S5"
}



firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
  // console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
  const payload = event.data.json();
  const notificationTitle = payload.notification.body;
  const notificationOptions = {
    body: payload.notification.body,
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});