import React from 'react';
import "./Header.scss"
const Header = (props) => {
  return(
  <header className="top-header">
    <div className="top-header-titlerow">
      <div className="top-header-logo">LOGO</div>
      <div className="top-header-title">асоціація психологічного консультування та травмотерапії</div>
      <div className="top-header-langnav">
        <a href="" className="active">UA</a>
        <a href="">EN</a>
      </div>
    </div>
    <nav className="top-nav">
      <ul className="top-navigation">
        <li>головна</li>
        <li>про асоціацію</li>
        <li>членство</li>
        <li>кфлендар</li>
        <li>новини</li>
        <li>партнери</li>
        <li>сертифікація</li>
        <li>освіта</li>
        <li>контакти</li>
      </ul>
    </nav>
  </header>
)};


export default Header;
