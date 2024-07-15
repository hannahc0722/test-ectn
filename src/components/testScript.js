// testScript.js

const { getStorage, ref, listAll, getDownloadURL } = require('firebase/storage');
const { initializeApp } = require('firebase/app');

// Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fetchImages = async (path) => {
  const listRef = ref(storage, path);
  try {
    const res = await listAll(listRef);
    if (res.items.length === 0) {
      console.log('No images found');
      return;
    }
    const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
    console.log('Image URLs:', urls);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

// Test the function
fetchImages('your_path');
