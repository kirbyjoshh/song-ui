import React, { useState, useEffect } from 'react';

const SongForm = ({ song, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    url: ''
  });

  useEffect(() => {
    if (song) {
      setFormData(song);
    }
  }, [song]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Artist</label>
        <input type="text" className="form-control" name="artist" value={formData.artist} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Album</label>
        <input type="text" className="form-control" name="album" value={formData.album} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>URL</label>
        <input type="text" className="form-control" name="url" value={formData.url} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary mr-2">Save</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default SongForm;
