import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const response = await axios.get('http://localhost:8080/songs');
    setSongs(response.data);
  };

  const handleSearch = async (keyword) => {
    if (keyword) {
      const response = await axios.get(`http://localhost:8080/songs/search/${keyword}`);
      setSongs(response.data);
    } else {
      fetchSongs();
    }
  };

  const handleAdd = () => {
    setSelectedSong(null);
    setIsEditing(true);
  };

  const handleEdit = (song) => {
    setSelectedSong(song);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/songs/${id}`);
    fetchSongs();
  };

  const handleSave = async (song) => {
    if (song.id) {
      await axios.put(`http://localhost:8080/songs/${song.id}`, song);
    } else {
      await axios.post('http://localhost:8080/songs', song);
    }
    fetchSongs();
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h1 className="my-4">Song UI</h1>
      <SearchBar onSearch={handleSearch} />
      <button className="btn btn-primary mb-3" onClick={handleAdd}>Add Song</button>
      {isEditing ? (
        <SongForm song={selectedSong} onSave={handleSave} onCancel={() => setIsEditing(false)} />
      ) : (
        <SongList songs={songs} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
