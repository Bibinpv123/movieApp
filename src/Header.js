import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="wrapper">
          <div className="header_val">Wookie</div>
          <div className="header_val">Movie</div>
        </div>
        <div className="search">
          <SearchIcon className="header_searchicon" />
          <input className="search_input" type="text" />
        </div>
      </div>
      <hr style={{ borderWidth: "3px", backgroundColor: "black" }} />
    </div>
  );
}

export default Header;
