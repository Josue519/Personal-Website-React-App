import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  aspect-ratio: 16/9;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ $isLoading }) => ($isLoading ? 'none' : 'block')};
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
`;

const PlayButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const VideoPlayer = ({ src, poster, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {
          setIsLoading(false);
        });
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoContainer>
      <Video
        ref={videoRef}
        $isLoading={isLoading}
        src={src}
        poster={poster}
        title={title}
        playsInline
        preload="metadata"
        controls={!isLoading}
      />
      {isLoading && (
        <LoadingOverlay>
          <PlayButton onClick={togglePlay}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="white"/>
            </svg>
          </PlayButton>
        </LoadingOverlay>
      )}
    </VideoContainer>
  );
};

export default VideoPlayer; 