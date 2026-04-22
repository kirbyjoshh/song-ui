import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

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
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <MainContent 
          songs={songs} 
          selectedSong={selectedSong} 
          onSelectSong={handleSelectSong}
          onSearch={handleSearch} 
        />
      </AppContainer>
    </>
  );
};

export default App;
