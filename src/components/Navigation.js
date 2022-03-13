/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navigation = ({ currentPage, next, previous }) => {
  return (
    <div className="navigation">
      <a
        onClick={(e) => {
          e.preventDefault();
          previous(currentPage);
        }}
        href="#"
        className="previous"
      >
        &laquo; Previous
      </a>
      <p>{currentPage}</p>
      <a
        onClick={(e) => {
          e.preventDefault();
          next(currentPage);
        }}
        href="#"
        className="next"
      >
        Next &raquo;
      </a>
    </div>
  );
};

export default Navigation;
