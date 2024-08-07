import React from 'react';
import styled from 'styled-components';
import {FaAppStore,FaBell, FaCog, FaInbox, FaSearch, FaUser} from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 0 1rem;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure header is on top */
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color:white;
  padding-right:2rem;
  justify-content:flex-end;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right:auto;
`;
const SearchBar = styled.input`
padding:0.5rem;
border:1px;
border-radious:4px;
width:200px;
max-width:80%;
border-radius:20px;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: white; /* Customize icon color */
  transition: color 0.3s;

  &:hover {
    color: #ccc; /* Change color on hover */
  }
`;
const Header =()=>{
    return(
        <HeaderContainer>
            <SearchContainer>
            <Icon><FaAppStore /></Icon> {/* App icon */}
            <SearchBar type="text" placeholder="search"/>
            </SearchContainer>
            <IconContainer>

                <Icon><FaInbox/></Icon>
                <Icon><FaBell/></Icon>
                <Icon><FaCog/></Icon>
                <Icon><FaUser/></Icon>
            </IconContainer>
        </HeaderContainer>
    )
}
export default Header;