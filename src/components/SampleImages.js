// src/components/SampleImages.js
'use client'
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import '../styles/SampleImages.css';
import { storage } from '../firebaseConfig';

const SampleImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [system, setSystem] = useState('AGH');
  const [camera, setCamera] = useState('Cam1');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login'); // Redirect to login page if not authenticated
      } else {
        fetchImages(`${system}/${camera}/${date}`);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate, system, camera, date]);

  const fetchImages = async (path) => {
    setLoading(true);
    const listRef = ref(storage, path);
    try {
      const res = await listAll(listRef);
      if (res.items.length === 0) {
        setImages([]);
        setLoading(false);
        return;
      }
      const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
      setImages(urls);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  };

  const handleFilter = (event) => {
    event.preventDefault();
    fetchImages(`${system}/${camera}/${date}`);
  };

  const handleClearFilters = () => {
    setSystem('AGH');
    setCamera('Cam1');
    setDate('');
    fetchImages('');
  };

  return (
    <div className="sample-images-container">
      <h1>Sample Images</h1>
      <form className="filter-form" onSubmit={handleFilter}>
        <div className="form-group">
          <label htmlFor="system">System:</label>
          <select id="system" className="custom-select" value={system} onChange={(e) => setSystem(e.target.value)}>
            <option value="AGH">AGH</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="camera">Camera:</label>
          <select id="camera" className="custom-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
            <option value="Cam1">Cam1</option>
            <option value="Cam2">Cam2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" className="custom-input" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit" className="custom-button">Filter</button>
        <button type="button" className="custom-button" onClick={handleClearFilters}>Clear Filters</button>
      </form>
      <div className="images-grid">
        {loading ? (
          <p>Loading images...</p>
        ) : (
          images.length ? (
            images.map((url, index) => (
              <img key={index} src={url} alt={`Sample ${index + 1}`} />
            ))
          ) : (
            <p>No images found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default SampleImages;
