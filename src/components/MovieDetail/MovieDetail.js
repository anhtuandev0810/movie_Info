import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled  from "styled-components";
import { setMovieDetail } from "../store/actions";
import { keyframes } from "styled-components";

const showModal = true;

function MovieDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };

  console.log(movie);
  return (
    <MovieDetailModal>
      <div
        className={`movieBackdrop ${
          showModal ? "showBackdrop" : "hideBackdrop"
        }`}
        onClick={handleCloseModal}
      >
        <div
          className={`modal ${showModal ? "showModal" : "hideModal"}`}
          style={
            movie
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || movie.poster_path
                  })`,
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          <div className="container">
            <div className="movieInfo">
              <h1 className="movieTitle">
                {movie && (movie.title || movie.name)}
              </h1>
              <p className="statical">
                <span className="rating">
                  Rating: {movie && movie.vote_average * 10}%
                </span>
                <span className="pop">
                  Popularity: {movie && movie.popularity}
                </span>
              </p>
              <p className="release">
                Release date:
                {movie &&
                  moment(movie.release_date).format('DD/MM/YYYY')}
              </p>
              <p className="runTime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
              <p className="overview">{movie && movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailModal>
  );
}

export default MovieDetail;

const fadeIn = keyframes`
  0%: { background: rgba(0, 0, 0, 0)}
  100%: { background: rgba(0, 0, 0, 0.6)}
`;

const MovieDetailModal = styled.div`
  .movieBackdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) fowards;
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 400;
    height: 70%;
    width: 100%;
    margin: 0 auto;
    color: var(--white);
    box-shadow: 0 15px 40px rgba(var(--dark), 0.2);
    transition: all 0.2s ease;
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }

  .container {
    position: relative;
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.95), 60%, transparent);
  }

  .movieInfo {
    width: 65%;
    height: 100%;
    padding-left: 24px;
    color: var(--white);
    font-size: 20px;
    padding-top: 25px;
  }

  .movieTitle {
    margin-top: 30px;
  }

  .statical {
    margin-top: 20px;
    display: flex;

    .rating {
      color: var(--green);
    }

    .pop {
      color: yellow;
      margin-left: 10px;
    }
  }

  .release,
  .runTime {
    margin-top: 10px;
  }

  .overview {
    margin-top: 15px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.4;
    font-size: 18px;
  }
`;
