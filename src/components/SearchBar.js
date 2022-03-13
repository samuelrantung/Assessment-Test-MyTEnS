import axios from "axios";
import React from "react";

const SearchBar = ({ setSearch, search, setUsers }) => {
  const Searching = () => {
    axios
      .get(`https://api.github.com/search/users?q=${search}+in:user`)
      .then((res) => {
        setUsers(res.data.items);
      });
  };
  return (
    <div className="form">
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search User Name"
        className="user-name-input"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            Searching();
          }
        }}
      ></input>
      <i className="fa fa-search" onClick={() => Searching()}></i>
    </div>
  );
};

export default SearchBar;
