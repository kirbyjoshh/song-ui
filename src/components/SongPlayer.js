import React from 'react';
import ReactPlayer from 'react-player';

const SongPlayer = ({ song }) => {
  if (!song) {
    return <div className="flex-1 text-white">No song selected</div>;
  }

  const getYouTubeVideoId = (url) => {
    if (!url) return '';

    const embedMatch = url.match(/youtube\.com\/embed\/([^?&/]+)/i);
    if (embedMatch?.[1]) {
      return embedMatch[1];
    }

    const watchMatch = url.match(/[?&]v=([^?&/]+)/i);
    if (watchMatch?.[1]) {
      return watchMatch[1];
    }

    const shortMatch = url.match(/youtu\.be\/([^?&/]+)/i);
    if (shortMatch?.[1]) {
      return shortMatch[1];
    }

    const fallbackMatch = url.match(/(?:^|\/)([A-Za-z0-9_-]{11})(?:$|[?&/])/);
    if (fallbackMatch?.[1]) {
      return fallbackMatch[1];
    }

    return url.length === 11 ? url : '';
  };

  const videoId = song && song.url ? getYouTubeVideoId(song.url) : '';
  const playableUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <section className="flex-1 mr-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{song.title}</h2>
          <p className="mt-1 text-sm text-[#b3b3b3]">{song.artist} • {song.album} • {song.genre}</p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[10px] bg-black pt-[56.25%]">
        {playableUrl ? (
          <ReactPlayer 
            url={playableUrl} 
            width="100%" 
            height="100%" 
            controls={true}
            playing={false}
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                  origin: window.location.origin,
                },
              },
            }}
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
