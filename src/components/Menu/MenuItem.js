import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="menuItem"
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      activeClassName="active"
    >
      <FontAwesomeIcon className="menuIcon" icon={Icon} />
      <span>{name}</span>
    </Link>
  );
}

export default MenuItem;
