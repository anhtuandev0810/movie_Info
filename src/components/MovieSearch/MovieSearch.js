import React from "react";
import styled from "styled-components";
import { useViewPort } from "../hooks";

function MovieSearch(props) {
    // const [windowWidth] = useViewPort();

  return (
    <SearchContainer>
      <div 
        className="searchList"
        
    >
          <div className="searchItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR255AO45po0gTLW9kHMqjmYaUKOekR5Uf5j53g5iRh4B6bECA6oFPEfcm3iycnnRpYHiA&usqp=CAU" alt="" />
            <span>Movie name</span>
          </div>
      </div>
    </SearchContainer>
  );
}

export default MovieSearch;

const SearchContainer = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background: var(--background-color);
    transition: all 0.3s ease;

    .searchList {
        padding: 40px 60px;
        display: grid;
        gap: 10px;
        grid-template-column: repeat(5);

        &:hover {
            .searchItem {
                opacity: 0.7;

            }
        }

        .searchItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 10px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%:
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0, 0, 0, 0.5);
                color: var(--white);
                font-weight: 500;
            }
        }
    }
`;
