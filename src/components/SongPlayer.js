import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const PlayerContainer = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 */
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
`;

const SongInfo = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #b3b3b3;
  font-size: 14px;
`;

const OpenButton = styled.a`
  color: #fff;
  background-color: #1db954;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 12px;
  float: right;
`;

const SongPlayer = ({ song }) => {
  if (!song) {
    return <div>Loading...</div>;
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

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
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
    <PlayerContainer>
      <Title>{song.title} <OpenButton href={song.url} target="_blank">OPEN</OpenButton></Title>
      <Subtitle>{song.artist} • {song.album} • {song.genre}</Subtitle>
      <VideoWrapper>
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
          <div style={{color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Invalid Video URL</div>
        )}
      </VideoWrapper>
      <SongInfo>
        <Title>{song.title}</Title>
        <Subtitle>{song.artist} • {song.album} • {song.genre}</Subtitle>
        <p>Search like YouTube, then click a card in "Recommended" to play.</p>
      </SongInfo>
    </PlayerContainer>
  );
};

export default SongPlayer;
