/**
 * SANARAA PLATFORM - FIREBASE CLOUD MESSAGING SERVICE WORKER
 * Handles background push notifications via Firebase V1 API
 */

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAL_i0A3Ed_Y2Tyqnn34yev82GFs0cFKEU",
  authDomain: "senara-78702.firebaseapp.com",
  projectId: "senara-78702",
  storageBucket: "senara-78702.firebasestorage.app",
  messagingSenderId: "894457191803",
  appId: "1:894457191803:web:f5f2216fb1aa6cbbc231de",
  measurementId: "G-8PW446Q1C8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message: ', payload);
  const notificationTitle = payload.notification?.title || 'إشعار جديد من صنارة 🇪🇬';
  const notificationOptions = {
    body: payload.notification?.body || 'لديك تحديث جديد على حسابك في منصة صنارة للتوظيف.',
    icon: '/assets/logo-trimmed.png',
    badge: '/assets/logo-trimmed.png',
    data: payload.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
