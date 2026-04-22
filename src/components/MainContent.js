import React from 'react';
import SearchBar from './SearchBar';
import SongPlayer from './SongPlayer';
import Recommended from './Recommended';

const MainContent = ({ songs, selectedSong, onSelectSong, onSearch }) => {
  return (
    <main className="flex-1 overflow-y-auto p-5">
      <SearchBar onSearch={onSearch} />
      <div className="flex gap-5">
        <SongPlayer song={selectedSong} />
        <Recommended songs={songs} onSelectSong={onSelectSong} />
      </div>
    </main>
  );
};

export default MainContent;
