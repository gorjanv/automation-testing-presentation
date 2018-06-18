import React from 'react';
import styled from 'styled-components';

const MenuBarWrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8e8e8;
  height: 50px;

  @media (max-width: 425px) {
    background-color: #0e8e75;
    height: 30px;
  }
`;

const SignOutLink = styled.a`
  display: inline;
  cursor: pointer;
  color: #5393fc;
`;

const MenuBar = ({ onSignOut }) => (
  <MenuBarWrapper>
    <span>Connected Lunch</span>
    <SignOutLink onClick={onSignOut} >Sign out</SignOutLink>
  </MenuBarWrapper>
);

export default MenuBar;