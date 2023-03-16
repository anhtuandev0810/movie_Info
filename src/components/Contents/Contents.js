import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLatest, getMyList, getNetflixOriginals, getTVShows } from '../store/actions';
import MovieRow from './MovieRow';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollY } from '../hooks';

function Contents() {
  const dispatch = useDispatch();
  const { NetflixOriginals, TVShows, latestMovies, myListMovies } = useSelector(state => state.infoMovies);
  const scrollY = useScrollY();

  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTVShows());
    dispatch(getLatest());
    dispatch(getMyList());
  }, [dispatch]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
        <MovieRow movies={NetflixOriginals} title="Netflix Originals" isPoster={true} idSection="home"/>
        <MovieRow movies={TVShows} title="TV Shows" isPoster={false} idSection="shows"/>
        <MovieRow movies={latestMovies} title="Latest" isPoster={false} idSection="latest"/>
        <MovieRow movies={myListMovies} title="My Lists" isPoster={false} idSection="list"/>
        <GoToTop 
          onClick={()=> scrollToTop()}
          style={{
            visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`
          }}
        >

          <FontAwesomeIcon icon={faCircleUp}/>
        </GoToTop>
    </div>
  );
};

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.4 ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }


`;