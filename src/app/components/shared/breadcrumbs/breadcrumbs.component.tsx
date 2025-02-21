import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function BreadcrumbComponent() {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);

  function Capitalize(word: string){
    return word.replace(/[_-]/g," ").replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return (
    
      <ul className="App-ul">
        <li>
          <Link className="App-link" to={"/"}>
            Home
          </Link>
        </li>

        {pathName.map((value, index) => {
          const where = `/${pathName.slice(0, index + 1).join("/")}`;
          
          return (
            <li key={where}>
              <span>{'> '}</span>
              <Link className="App-link" to="{where}">
                {Capitalize(value)}
              </Link>
            </li>
          );
        })}
        
      </ul>
  );
}
