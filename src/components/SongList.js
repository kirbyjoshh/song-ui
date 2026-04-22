import React from 'react';

const SongList = ({ songs, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>
              <button className="btn btn-sm btn-warning mr-2" onClick={() => onEdit(song)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(song.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
