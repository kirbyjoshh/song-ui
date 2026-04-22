import React from 'react';
import styled from 'styled-components';

const RecommendedContainer = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SongCard = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 5px;
  margin-right: 15px;
  object-fit: cover;
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SongTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const SongArtist = styled.p`
  font-size: 14px;
  color: #b3b3b3;
  margin: 0;
`;

const Recommended = ({ songs, onSelectSong }) => {
  const getYouTubeThumbnail = (url) => {
    if (!url) return '';
    const videoId = url.split('v=')[1];
    if (!videoId) return '';
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/0.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <RecommendedContainer>
      <Title>Recommended</Title>
      {songs.map((song) => (
        <SongCard key={song.id} onClick={() => onSelectSong(song)}>
          <Thumbnail src={getYouTubeThumbnail(song.url)} alt={song.title} />
          <SongDetails>
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongDetails>
        </SongCard>
      ))}
    </RecommendedContainer>
  );
};

export default Recommended;
