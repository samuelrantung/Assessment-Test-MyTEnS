/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";

const Navigation = ({ currentPage, setCurrentPage, setUsers, search }) => {
  //User list next page
  const next = async (pageNumber) => {
    setCurrentPage(pageNumber + 1);
    await axios
      .get(
        `https://api.github.com/search/users?q=${search}+in:user&page=${
          pageNumber + 1
        }`
      )
      .then((res) => {
        setUsers(res.data.items);
      });
  };
  //User list previous page
  const previous = async (pageNumber) => {
    if (pageNumber > 1) {
      setCurrentPage(pageNumber - 1);
      await axios
        .get(
          `https://api.github.com/search/users?q=${search}+in:user&page=${
            pageNumber - 1
          }`
        )
        .then((res) => {
          setUsers(res.data.items);
        });
    }
  };
  return (
    <div className="navigation">
      <a onClick={() => previous(currentPage)} href="#" className="previous">
        &laquo; Previous
      </a>
      <p>{currentPage}</p>
      <a onClick={() => next(currentPage)} href="#" className="next">
        Next &raquo;
      </a>
    </div>
  );
};

export default Navigation;
