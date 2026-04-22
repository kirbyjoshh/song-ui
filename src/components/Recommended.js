import React from 'react';

const Recommended = ({ songs, onSelectSong }) => {
  const getYouTubeThumbnail = (url) => {
    if (!url) return 'https://via.placeholder.com/120x90.png?text=No+Video';
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    // Fallback if the url is just an ID
    if (url.length === 11) {
      return `https://img.youtube.com/vi/${url}/hqdefault.jpg`;
    }
    return 'https://via.placeholder.com/120x90.png?text=Invalid+URL';
  };

  return (
    <aside className="flex-1">
      <h3 className="mb-5 text-xl font-bold">Recommended</h3>
      {songs.map((song) => (
        <button
          type="button"
          key={song.id}
          onClick={() => onSelectSong(song)}
          className="mb-4 flex w-full cursor-pointer items-start gap-4 text-left"
        >
          <img
            src={getYouTubeThumbnail(song.url)}
            alt={song.title}
            className="h-[90px] w-[120px] rounded-[5px] object-cover"
          />
          <div className="flex flex-col">
            <p className="m-0 text-base font-medium text-white">{song.title}</p>
            <p className="m-0 text-sm text-[#b3b3b3]">{song.artist}</p>
          </div>
        </button>
      ))}
    </aside>
  );
};

export default Recommended;
