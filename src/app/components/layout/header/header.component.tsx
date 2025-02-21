import React from "react";
import logo from '../../../../assets/logo/logo.svg'
import BreadcrumbComponent from "../../shared/breadcrumbs/breadcrumbs.component";
function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <BreadcrumbComponent/>
    </header>
  );
}

export default Header;
