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
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    if (url.length === 11) {
      return `https://www.youtube.com/watch?v=${url}`;
    }
    return url;
  };

  return (
    <PlayerContainer>
      <Title>{song.title} <OpenButton href={song.url} target="_blank">OPEN</OpenButton></Title>
      <Subtitle>{song.artist} • {song.album} • {song.genre}</Subtitle>
      <VideoWrapper>
        <ReactPlayer 
          url={getPlayableUrl(song.url)} 
          width="100%" 
          height="100%" 
          controls 
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
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
