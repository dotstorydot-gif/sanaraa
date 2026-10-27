/**
 * SANARAA PLATFORM - PRODUCTION FIREBASE SERVICE LAYER
 * Project: Senara (senara-78702)
 * Integrates: Firebase Auth, Firestore, Storage, and Cloud Messaging (FCM V1)
 * Clean, production-ready implementation with zero mockup data.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js";

// Official Senara Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL_i0A3Ed_Y2Tyqnn34yev82GFs0cFKEU",
  authDomain: "senara-78702.firebaseapp.com",
  projectId: "senara-78702",
  storageBucket: "senara-78702.firebasestorage.app",
  messagingSenderId: "894457191803",
  appId: "1:894457191803:web:f5f2216fb1aa6cbbc231de",
  measurementId: "G-8PW446Q1C8"
};

// Web Push Certificate (VAPID Key) from User
const FCM_VAPID_KEY = "BKQZ107Df9LhpW3Lt7iEZh1eN7IUSVMv5MpMz917FWI8XdNDg-VQeqVp50x-F1YncH18XDmXphL4qrld_p3_Ldc";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let messaging = null;

// ============================================================
// 1. AUTHENTICATION & USER PROFILES
// ============================================================

/**
 * Register a new user (Candidate or Employer) in Firebase Auth & Firestore
 */
export async function registerUser({ email, password, fullName, phone = '', role = 'candidate', companyName = '' }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: fullName });

    const userProfile = {
      uid: user.uid,
      email,
      fullName,
      phone,
      role, // 'candidate' | 'employer' | 'agency'
      companyName: role === 'employer' || role === 'agency' ? companyName : '',
      jobTitle: '',
      location: '',
      bio: '',
      skills: [],
      cvUrl: '',
      cvFileName: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    try {
      await setDoc(doc(db, "users", user.uid), userProfile);
    } catch (dbErr) {
      console.warn("Firestore user profile save note:", dbErr);
    }

    localStorage.setItem("sanara_user_profile", JSON.stringify(userProfile));
    return { success: true, user, profile: userProfile };
  } catch (error) {
    console.error("Firebase Registration Error:", error);
    return { success: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * Login existing user
 */
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    let profile = null;
    try {
      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (docSnap.exists()) {
        profile = docSnap.data();
      }
    } catch (e) {
      console.warn("Firestore profile fetch note:", e);
    }

    if (!profile) {
      profile = {
        uid: user.uid,
        email: user.email,
        fullName: user.displayName || user.email.split('@')[0],
        role: 'candidate'
      };
    }

    localStorage.setItem("sanara_user_profile", JSON.stringify(profile));
    return { success: true, user, profile };
  } catch (error) {
    console.error("Firebase Login Error:", error);
    return { success: false, error: getFriendlyErrorMessage(error) };
  }
}

/**
 * Logout
 */
export async function logoutUser() {
  try {
    await signOut(auth);
    localStorage.removeItem("sanara_user_profile");
    return { success: true };
  } catch (error) {
    console.error("Firebase Logout Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Listen to Auth State Changes
 */
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      let profile = null;
      try {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) profile = docSnap.data();
      } catch (e) {
        profile = JSON.parse(localStorage.getItem("sanara_user_profile") || "null");
      }
      callback(user, profile);
    } else {
      callback(null, null);
    }
  });
}

/**
 * Update candidate / user profile in Firestore
 */
export async function updateUserProfile(profileData) {
  const user = auth.currentUser;
  if (!user) return { success: false, error: "يجب تسجيل الدخول أولاً." };

  try {
    const userRef = doc(db, "users", user.uid);
    const updated = {
      ...profileData,
      updatedAt: serverTimestamp()
    };
    await setDoc(userRef, updated, { merge: true });

    // Update local cache
    const current = JSON.parse(localStorage.getItem("sanara_user_profile") || "{}");
    const merged = { ...current, ...updated };
    localStorage.setItem("sanara_user_profile", JSON.stringify(merged));

    return { success: true, profile: merged };
  } catch (err) {
    console.error("Update profile error:", err);
    return { success: false, error: err.message };
  }
}

// ============================================================
// 2. LIVE JOBS MANAGEMENT (FIRESTORE)
// ============================================================

/**
 * Fetch all active jobs from Firestore (Zero mock data)
 */
export async function fetchJobs(filters = {}) {
  try {
    const jobsRef = collection(db, "jobs");
    let q = query(jobsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const jobs = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      jobs.push({
        id: docSnap.id,
        ...data,
        createdAtDate: data.createdAt?.toDate ? data.createdAt.toDate() : new Date()
      });
    });

    return jobs;
  } catch (e) {
    console.warn("Firestore live jobs fetch returned error or empty:", e);
    return [];
  }
}

/**
 * Get single job by ID
 */
export async function getJobById(jobId) {
  try {
    const docRef = doc(db, "jobs", jobId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return { id: snap.id, ...snap.data() };
    }
  } catch (e) {
    console.warn("Get job error:", e);
  }
  return null;
}

/**
 * Post a new job by employer
 */
export async function postJob(jobData) {
  try {
    const user = auth.currentUser;
    const newJob = {
      title: jobData.title || "وظيفة شاغرة",
      company: jobData.company || "شركة مسجلة",
      location: jobData.location || "القاهرة، مصر",
      type: jobData.type || "full-time",
      salary: jobData.salary || "يحدد بناء على المقابلة",
      category: jobData.category || "tech",
      description: jobData.description || "",
      requirements: jobData.requirements || [],
      tags: jobData.tags || [],
      employerId: user ? user.uid : "anonymous",
      employerEmail: user ? user.email : "",
      status: "active",
      applicantsCount: 0,
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, "jobs"), newJob);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error posting job to Firestore:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Fetch jobs posted by a specific employer
 */
export async function fetchEmployerJobs(employerId) {
  try {
    const user = auth.currentUser;
    const targetId = employerId || (user ? user.uid : null);
    if (!targetId) return [];

    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, where("employerId", "==", targetId));
    const snapshot = await getDocs(q);

    const jobs = [];
    snapshot.forEach(docSnap => {
      jobs.push({ id: docSnap.id, ...docSnap.data() });
    });
    return jobs;
  } catch (err) {
    console.warn("Fetch employer jobs error:", err);
    return [];
  }
}

// ============================================================
// 3. APPLICATIONS & CV STORAGE
// ============================================================

/**
 * Upload CV file directly to Firebase Storage
 */
export async function uploadCVFile(file) {
  try {
    const user = auth.currentUser;
    const uid = user ? user.uid : 'guest';
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `resumes/${uid}/${Date.now()}_${cleanFileName}`;
    const fileRef = ref(storage, storagePath);

    const snapshot = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Save CV reference in candidate profile if logged in
    if (user) {
      await updateUserProfile({
        cvUrl: downloadURL,
        cvFileName: file.name
      });
    }

    return { success: true, url: downloadURL, fileName: file.name };
  } catch (error) {
    console.error("Firebase Storage Upload Error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Submit Job Application to Firestore
 */
export async function submitApplication({ jobId, jobTitle, applicantName, applicantEmail, applicantPhone, cvUrl = '', cvFile = null }) {
  try {
    const user = auth.currentUser;
    let finalCvUrl = cvUrl;

    if (cvFile && !finalCvUrl) {
      const uploadRes = await uploadCVFile(cvFile);
      if (uploadRes.success) {
        finalCvUrl = uploadRes.url;
      }
    }

    const applicationData = {
      jobId,
      jobTitle,
      applicantId: user ? user.uid : "guest",
      applicantName: applicantName || (user ? user.displayName : "مرشح صنارة"),
      applicantEmail: applicantEmail || (user ? user.email : ""),
      applicantPhone: applicantPhone || "",
      cvUrl: finalCvUrl,
      status: "new", // 'new' | 'reviewed' | 'interview' | 'accepted' | 'rejected'
      createdAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, "applications"), applicationData);

    // Increment applicants counter on the job if possible
    try {
      const jobDocRef = doc(db, "jobs", jobId);
      const jobSnap = await getDoc(jobDocRef);
      if (jobSnap.exists()) {
        const currentCount = jobSnap.data().applicantsCount || 0;
        await updateDoc(jobDocRef, { applicantsCount: currentCount + 1 });
      }
    } catch (cntErr) {
      console.warn("Could not increment job applicant count:", cntErr);
    }

    return { success: true, applicationId: docRef.id };
  } catch (error) {
    console.error("Error submitting application:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Fetch applications for an employer or job
 */
export async function fetchApplications(filter = {}) {
  try {
    const appsRef = collection(db, "applications");
    let q;
    if (filter.jobId) {
      q = query(appsRef, where("jobId", "==", filter.jobId));
    } else {
      q = query(appsRef, orderBy("createdAt", "desc"));
    }

    const snapshot = await getDocs(q);
    const applications = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      applications.push({
        id: docSnap.id,
        ...data,
        createdAtDate: data.createdAt?.toDate ? data.createdAt.toDate() : new Date()
      });
    });

    return applications;
  } catch (err) {
    console.warn("Fetch applications error:", err);
    return [];
  }
}

/**
 * Fetch applications submitted by logged-in candidate
 */
export async function fetchCandidateApplications() {
  try {
    const user = auth.currentUser;
    if (!user) return [];

    const appsRef = collection(db, "applications");
    const q = query(appsRef, where("applicantId", "==", user.uid));
    const snapshot = await getDocs(q);

    const applications = [];
    snapshot.forEach(docSnap => {
      applications.push({ id: docSnap.id, ...docSnap.data() });
    });
    return applications;
  } catch (err) {
    console.warn("Fetch candidate applications error:", err);
    return [];
  }
}

// ============================================================
// 4. FIREBASE CLOUD MESSAGING (FCM V1 - WEB PUSH)
// ============================================================

/**
 * Initialize FCM and Request Notification Permission
 */
export async function initCloudMessaging() {
  try {
    const supported = await isSupported();
    if (!supported) return null;

    messaging = getMessaging(app);

    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging, {
          vapidKey: FCM_VAPID_KEY,
          serviceWorkerRegistration: registration
        });
        localStorage.setItem("fcm_device_token", token);

        onMessage(messaging, (payload) => {
          if (typeof window.showToast === 'function') {
            const title = payload.notification?.title || "إشعار جديد من صنارة 🔔";
            const body = payload.notification?.body || "";
            window.showToast(`${title}: ${body}`, "info");
          }
        });

        return token;
      }
    }
  } catch (err) {
    console.warn("FCM Warning:", err);
  }
  return null;
}

// ============================================================
// 5. HELPER UTILITIES
// ============================================================
function getFriendlyErrorMessage(error) {
  const code = error.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return "هذا البريد الإلكتروني مسجل بالفعل، يرجى تسجيل الدخول بدلاً من ذلك.";
    case "auth/invalid-email":
      return "صيغة البريد الإلكتروني غير صحيحة، يرجى التأكد منه.";
    case "auth/weak-password":
      return "كلمة المرور ضعيفة، يرجى اختيار كلمة مرور مكونة من 6 حروف وأرقام على الأقل.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
    default:
      return error.message || "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى.";
  }
}

// Expose globally
window.SanaraFirebase = {
  app,
  auth,
  db,
  storage,
  registerUser,
  loginUser,
  logoutUser,
  onAuthChange,
  updateUserProfile,
  fetchJobs,
  getJobById,
  postJob,
  fetchEmployerJobs,
  uploadCVFile,
  submitApplication,
  fetchApplications,
  fetchCandidateApplications,
  initCloudMessaging
};
