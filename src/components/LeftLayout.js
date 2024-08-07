import React from 'react';
import styled from 'styled-components';
import {  FaHome, FaTachometerAlt, FaFileAlt, FaWallet, FaSignOutAlt } from 'react-icons/fa';

const SideNav = styled.nav`
  width: 20px;
  background-color: #444;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px; /* Height of the header */
  bottom: 0;
`;
const NavItem = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  transition: color 0.3s;
  color: white; /* Customize icon color */
  transition: color 0.3s;

  &:hover {
    color: #87CEEB; /* Change color on hover */
  }
`;
const Logout = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin-top: auto; /* Push to the bottom */
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

const Layout = () => {
  return (
        <SideNav>
          <NavItem>
            <NavItem><FaHome /></NavItem> {/* Home icon */}
            <NavItem><FaTachometerAlt /></NavItem> {/* Dashboard icon */}
            <NavItem><FaFileAlt /></NavItem> {/* Reports icon */}
            <NavItem><FaWallet /></NavItem> {/* Wallet icon */}
          </NavItem>
          <Logout>
            <FaSignOutAlt /> {/* Logout icon */}
          </Logout>
        </SideNav>
        
  );
};

export default Layout;
