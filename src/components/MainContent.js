import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SongPlayer from './SongPlayer';
import Recommended from './Recommended';

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const MainContent = ({ songs, selectedSong, onSelectSong, onSearch }) => {
  return (
    <MainContainer>
      <SearchBar onSearch={onSearch} />
      <div style={{ display: 'flex' }}>
        <SongPlayer song={selectedSong} />
        <Recommended songs={songs} onSelectSong={onSelectSong} />
      </div>
    </MainContainer>
  );
};

export default MainContent;
