import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import axios from 'axios';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get('https://song-api-1-d1kz.onrender.com/songs');
      setSongs(response.data);
      if (response.data.length > 0) {
        setSelectedSong(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const handleSearch = async (keyword) => {
    if (keyword) {
      try {
        const response = await axios.get(`https://song-api-1-d1kz.onrender.com/songs/search/${keyword}`);
        setSongs(response.data);
      } catch (error) {
        console.error("Error searching songs:", error);
      }
    } else {
      fetchSongs();
    }
  };

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="flex min-h-screen bg-[#121212] text-white font-sans">
        <Sidebar />
        <MainContent 
          songs={songs} 
          selectedSong={selectedSong} 
          onSelectSong={handleSelectSong}
          onSearch={handleSearch} 
        />
    </div>
  );
};

export default App;
