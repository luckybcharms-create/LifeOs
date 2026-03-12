'use client';

import CryptoJS from 'crypto-js';

// In a real app, this key should be generated and stored securely (e.g., SecureStore or KeyChain)
// For this prototype, we'll use a consistent key stored in localStorage if available
const STORAGE_KEY = 'lifeos_vault_key';
const DEFAULT_KEY = 'lifeos-secure-prototype-key-2025';

function getEncryptionKey() {
  if (typeof window === 'undefined') return DEFAULT_KEY;
  let key = localStorage.getItem(STORAGE_KEY);
  if (!key) {
    key = DEFAULT_KEY;
    localStorage.setItem(STORAGE_KEY, key);
  }
  return key;
}

export function encryptData(data: string): string {
  const key = getEncryptionKey();
  return CryptoJS.AES.encrypt(data, key).toString();
}

export function decryptData(ciphertext: string): string {
  const key = getEncryptionKey();
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}
