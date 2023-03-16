import {
  faBars,
  faHome,
  faVideo,
  faList,
  faTv,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menu(props) {
  return (
    <MenuNavigation>
      <MenuItem name="Home" Icon={faHome} to='home' />
      <MenuItem name="Movies" Icon={faVideo} to="shows"/>
      <MenuItem name="Latest" Icon={faNewspaper} to="latest"/>
      <MenuItem name="My Lists" Icon={faList} to="list"/>
    </MenuNavigation>
  );
}

export default Menu;

const MenuNavigation = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  height: 150px;
  width: 30px;
  overflow: hidden;

  &:hover {
    width: 150px;
  }

  .menuItem {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 12px 6px;
    cursor: pointer;
    color: white;

    .menuIcon {
      margin-right: 10px;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);

      &:hover {
        color: var(--white);
      }
    }
  }
`;
