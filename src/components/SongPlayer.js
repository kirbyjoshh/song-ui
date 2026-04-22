import React from 'react';
import ReactPlayer from 'react-player';

const SongPlayer = ({ song }) => {
  if (!song) {
    return <div className="flex-1 text-white">No song selected</div>;
  }

  const getPlayableUrl = (url) => {
    if (!url) return '';
    console.log("Raw URL from API:", url); // DEBUG
    
    // Test if it's already a full youtube or youtu.be URL
    if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
       return url;
    }
    
    // Test if it's an embed URL
    if(url.includes('youtube.com/embed/')) {
        return url;
    }

    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    
    // If it's just exactly an 11 char ID string
    if (url.length === 11) {
      return `https://www.youtube.com/watch?v=${url}`;
    }

    // Assume whatever they gave us is the ID since nothing else worked
    return `https://www.youtube.com/watch?v=${url}`; 
  };

  const playableUrl = song && song.url ? getPlayableUrl(song.url) : '';

  return (
    <section className="flex-1 mr-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{song.title}</h2>
          <p className="mt-1 text-sm text-[#b3b3b3]">{song.artist} • {song.album} • {song.genre}</p>
        </div>
        <a
          href={song.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-[#1db954] px-3 py-1 text-xs font-semibold text-white no-underline"
        >
          OPEN
        </a>
      </div>
      <div className="relative overflow-hidden rounded-[10px] bg-black pt-[56.25%]">
        {playableUrl ? (
          <ReactPlayer 
            url={playableUrl} 
            width="100%" 
            height="100%" 
            controls={true}
            playing={false}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">Invalid Video URL</div>
        )}
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold">{song.title}</h2>
        <p className="mt-1 text-sm text-[#b3b3b3]">{song.artist} • {song.album} • {song.genre}</p>
        <p className="mt-3 text-sm text-[#b3b3b3]">Search like YouTube, then click a card in "Recommended" to play.</p>
      </div>
    </section>
  );
};

export default SongPlayer;
