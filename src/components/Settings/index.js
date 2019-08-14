import React from "react";
import styled from "styled-components";

import { Link, Route } from "react-router-dom";

const SettingsNavbar = () => (
  <NavWrapper>
    <ul>
      <li>
        <Link to="/settings/">Settings</Link>
      </li>
      <li>
        <Link to="/settings/profile/">Profile</Link>
      </li>
      <li>
        <Link to="/settings/company/">Company</Link>
      </li>
    </ul>
  </NavWrapper>
);

export const Settings = () => (
  <div>
    <h1>Settings</h1>
    <SettingsNavbar />
    <Route path="/settings/" exact render={() => <h2>Main settings page</h2>} />
    <Route path="/settings/profile/:id/" render={Profile} />
    <Route path="/settings/company/" render={() => <h2>company</h2>} />
  </div>
);

const Profile = ({ match }) => {
  return <h2>profile {match.params.id}</h2>;
};

const NavWrapper = styled.nav`
  height: 50px;
  background-color: #44e4ff;
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
