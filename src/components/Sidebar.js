import React from 'react';
import styled from 'styled-components';
import { FaHome, FaFire, FaMusic } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 240px;
  background-color: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:hover, &.active {
    color: #fff;
  }

  svg {
    margin-right: 15px;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>SONG UI</Logo>
      <Nav>
        <NavLink href="#" className="active"><FaHome /> Home</NavLink>
        <NavLink href="#"><FaFire /> Trending</NavLink>
        <NavLink href="#"><FaMusic /> Music</NavLink>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
