import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <h1><a href="/">facebook.</a></h1>
      <ul>
        <li>
          <a href="/">meu perfil</a>
        </li>
        <li>
          <i className="material-icons">account_circle</i>
        </li>
      </ul>
    </div>
  );
}