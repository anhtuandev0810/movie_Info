import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NetflixLogo from '../../assests/img/Netflix-logo-red-black-png.png'
import { useScrollY } from '../hooks';
import Menu from '../Menu/Menu';

function Navbar(props) {
    const scrollY = useScrollY();
    return (
        <Navigation 
            style={scrollY < 50 ? {backgroundColor: 'transparent'}: {backgroundColor: 'black'}}
        >
            <div className="container">
                <Menu/>
                <div className="imgLogo">
                    <img src={NetflixLogo} al="Logo"/>
                </div>
                <div className="searchInput">
                    <FontAwesomeIcon icon={faSearch} className="iconSearch"/>
                    <input type="text" placeholder="Input name, genres, actors..." className="inputSearch"/>
                </div>
            </div>
        </Navigation>
    );
};

export default Navbar;


const Navigation = styled.div `
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 30;

    .container {
        background-color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flexDirection: row;
    }


    .imgLogo {
        height: 80px;
        width: 120px;
        cursor: pointer;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .searchInput {
        padding-right: 25px;
    }

    .iconSearch {
        color: #f2f4f4; 
        margin-right: 5px;
        transform: translateX(24px) translateY(1px);
        width: 15px;
        height: 15px;
    }

    .iconSearch:hover {
        cursor: pointer;
        color: white;
    }

    .inputSearch {
        background-color: transparent;
        color: var(--white);
        border-color: transparent;
        font-size: 14px;
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;

        &:focus {
            padding-left: 26px;
            width: 200px;
            cursor: text;
            opacity: 1;
            border-radius: 5px;
            border-bottom: 1px solid #ccc;

        }
        transition: width 0.5s;

    }
`;