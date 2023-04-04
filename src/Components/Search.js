import React, { useState } from "react";
import Logo from "../images/Google logo.png";
import Icon from "../images/search.png";
import "../css/Search.css";

function Search() {
  const [searchKeyword,setSearchKeyword] = useState("");
  const [showKeyword,setShowKeyword] = useState("");
  return (
    <div className="main">
      <img src={Logo} />
      <div className="SearchBox">
        <input
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowKeyword(searchKeyword);
            }
          }}
          className="search"
        />
        <h1>{showKeyword}</h1>
        <div className="icons">
          <div>
            <img src={Icon} />
          </div>
          <div>
            <img src=""></img>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>Google Search</button>
        <button>I'm feeling Lucky</button>
      </div>
      <ul className="languages">
        <li>Google offered in:</li>
        <li>
          <a href="#">Hausa</a>
        </li>
        <li>
          <a href="#">Akan</a>
        </li>
        <li>
          <a href="#">Ewe</a>
        </li>
        <li>
          <a href="#">Ga</a>
        </li>
      </ul>
    </div>
  );
}

export default Search;
