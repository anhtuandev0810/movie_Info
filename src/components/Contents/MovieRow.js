import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SmoothVerticalScrolling } from "../../utils";
import { useViewPort } from "../hooks";
import { setMovieDetail } from "../store/actions";

function MovieRow(props) {
  const { movies, title, isPoster, idSection } = props;
  const windowWith = useViewPort();
  const sliderRef = useRef();
  const itemRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const dispatch = useDispatch(setMovieDetail);

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) {
        handleScrollRight();
      }

      if (dragMove > dragDown) {
        handleScrollLeft();
      }
    }
  }, [dragDown, dragMove, isDrag]);

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft)
      sliderRef.current.scrollBy(itemRef.current.clientWidth * 2, 0);
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0)
      sliderRef.current.scrollBy(-itemRef.current.clientWidth * 2, 0);
  };

  const handleDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const handleDragEnd = (e) => {
    setIsDrag(false);
  };

  const handleDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  const handleSetMovieDetail = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  // console.log(movies);
  return (
    <ContentImage draggable="false" id={idSection}>
      <h1 className="headerTitle">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}, ${
                  windowWith > 1200 ? "360px" : "200px"
                })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          // eslint-disable-next-line array-callback-return
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imgUrl = isPoster
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={itemRef}
                  draggable="false"
                  onClick={() => handleSetMovieDetail(movie)}
                >
                  <img
                    src={imgUrl}
                    alt="#"
                    draggable="false"
                  />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
            )}
        })}
      </MovieSlider>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </ContentImage>
  );
}

export default MovieRow;

const ContentImage = styled.div`
  background-color: var(--background-color);
  color: var(--white);
  padding: 20px 20px 20px 0;
  position: relative;

  .headerTitle {
    font-size: 18px;
    user-select: none;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    margin-left: 10px;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 20;
    width: 50px;
    height: 100px;
    transform-origin: center;
    cursor: pointer;
    color: var(--white);
    border-radius: 5px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    svg {
      opacity: 0.7;
      font-size: 40px;
      transition: all 0.3 linear;
    }

    &:hover {
      color: var(--white);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
      color: var(--white);
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 20;
    width: 50px;
    height: 100px;
    transform-origin: center;
    cursor: pointer;
    color: var(--white);
    border-radius: 5px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    svg {
      opacity: 0.7;
      font-size: 40px;
      transition: all 0.3 linear;
    }

    &:hover {
      color: var(--white);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
      color: var(--white);
    }
  }
`;

const MovieSlider = styled.div`
  display: grid;
  gap: 2px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  .movieItem {
    transform: scale(1);
    max-width: 320px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      -webkit-filter: brightness(1) !important;
      filter: brightness(1) !important;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movieName {
      width: 100%;
      height: 20px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
