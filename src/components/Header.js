import React from 'react';

function Header() {
 return (
  <header className="header">
   <img className="mobile" src="./images/bg-header-mobile.svg" alt=""/>
   <img className="desktop" src="./images/bg-header-desktop.svg" alt=""/>
  </header>
 )
}

export default Header;

// const Header = styled.header`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

// `;

// const Container = styled.div`
//   text-align: center;
// `

