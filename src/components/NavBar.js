import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="violet" textalign="center">
      <Menu.Item
        name="The Book of Recipes"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Links}
        to="/"
      />
    </Menu>
  );
};

export default NavBar;

// add-navbar