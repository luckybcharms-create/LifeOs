'use client';

import { firebaseConfig } from '@/lib/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  try {
    if (!getApps().length) {
      // Important! initializeApp() is called without any arguments because Firebase App Hosting
      // integrates with the initializeApp() function to provide the environment variables needed to
      // populate the FirebaseOptions in production. It is critical that we attempt to call initializeApp()
      // without arguments.
      let firebaseApp;
      try {
        // Attempt to initialize via Firebase App Hosting environment variables
        firebaseApp = initializeApp();
      } catch (e) {
        // Only warn in production because it's normal to use the firebaseConfig to initialize
        // during development
        if (process.env.NODE_ENV === "production") {
          console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
        }
        firebaseApp = initializeApp(firebaseConfig);
      }

      return getSdks(firebaseApp);
    }

    // If already initialized, return the SDKs with the already initialized App
    return getSdks(getApp());
  } catch (err) {
    // Graceful fallback for non-browser or failed init environments
    console.error("Critical Firebase Init Error:", err);
    // Create a dummy app to prevent the SDK getters from throwing immediately if possible,
    // though the provider will catch the null state.
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    return getSdks(app);
  }
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from '../components/client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
