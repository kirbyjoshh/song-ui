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

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
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

  return (
    <PlayerContainer>
      <Title>{song.title} <OpenButton href={song.url} target="_blank">OPEN</OpenButton></Title>
      <Subtitle>{song.artist} • {song.album} • {song.genre}</Subtitle>
      <VideoWrapper>
        <StyledPlayer 
          url={song.url} 
          width="100%" 
          height="100%" 
          controls 
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
