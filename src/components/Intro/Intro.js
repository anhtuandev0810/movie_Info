import { faVolumeMute, faVolumeUp, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

function Intro(props) {
  const [isMuted, setIsMuted] =  useState(false);
  const handleClick = () => {
    setIsMuted(prev => !prev);
  };
  return (
    <IntroContainer>
          <ReactPlayer
              playing={true}
              loop={true}
              width= "100%"
              height= "100%"
              volume= {1}
              muted = {isMuted}
              url="https://vimeo.com/362677521"
              className="videoIntro"
          />
          <div className="intro">
              <h1 className="titleName">Harry Potter and the deathly hallows</h1>
              <p className="descName">Description</p>
          </div>
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeUp} className="volumeUp" onClick={handleClick}/>
          ): (
            <FontAwesomeIcon icon={faVolumeXmark} className="volumeMute" onClick={handleClick}/> 
          )}
          <div className="bottom"></div>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div `
  background-color: var(--background-color);
  position: relative;
  color: var(--white);
  padding-top: 50%;
  width: 100%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .intro {
    position: absolute;
    top: 140px;
    left: 50px;

    .titleName {
      font-size: 40px;
      font-weight: 700;
      transition: all 0.3s ease;
    }

    .descName {
      font-size: 24px;
      font-weight: 500;
      transition: all 0.3s ease;
      max-width: 550px;
      width: 100%;
      line-height: 1.5;
      padding-top: 25px;
    }
  }

  .volumeMute {
    position: absolute;
    height: 20px;
    width: 20px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    padding: 5px;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.2);
    }
  }

  .volumeUp {
    position: absolute;
    height: 20px;
    width: 20px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    padding: 5px;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: scale(1);

    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.2);
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(180deg, transparent, rgba(15, 15, 15, 0.6) 40%, rgb(17, 17, 17), rgb(17, 17, 17));
  }
`;