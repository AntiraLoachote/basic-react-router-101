import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <NavWrapper>
    <ul>
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/settings/">Settings</NavLink>
      </li>
      <li>
        <NavLink to="/contact/">Contact</NavLink>
      </li>
    </ul>
  </NavWrapper>
);

const NavWrapper = styled.nav`
  height: 50px;
  background-color: #4bf;
  border: 1px solid transparent;

  > ul {
    list-style: none;
    display: flex;

    > li ~ li {
      margin-left: 20px;
    }
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`;
