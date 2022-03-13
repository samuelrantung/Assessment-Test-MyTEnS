import axios from "axios";
import React from "react";
import { Navigation } from ".";

const RepositoryList = ({
  setRepositoryOpen,
  repositoryOpen,
  userDetail,
  repositories,
  currentPageRepo,
  setCurrentPageRepo,
  setRepositories,
}) => {
  //Repositories next page
  const nextRepo = async (pageNumber) => {
    setCurrentPageRepo(pageNumber + 1);
    await axios
      .get(`${userDetail.repos_url}?page=${pageNumber + 1}`)
      .then((res) => {
        setRepositories(res.data);
      });
  };

  //Repositories previous page
  const previousRepo = async (pageNumber) => {
    if (pageNumber > 1) {
      setCurrentPageRepo(pageNumber - 1);
      await axios
        .get(`${userDetail.repos_url}?page=${pageNumber - 1}`)
        .then((res) => {
          setRepositories(res.data);
        });
    }
  };
  return (
    <>
      <div
        className="overlay"
        onClick={() => setRepositoryOpen(!repositoryOpen)}
      ></div>
      <div className="detail-container">
        <div className="row">
          <i className="fa fa-book-bookmark fa-invert"></i>

          <img
            src={`${userDetail.avatar_url}`}
            alt="avatar"
            className="avatar"
          ></img>
          <div className="user-detail-container">
            <div className="row-name">
              <h3>{userDetail.name}</h3>
              <h4 className="login-name">{userDetail.login}</h4>
            </div>
            <div>
              <p>{userDetail.bio}</p>
            </div>
          </div>
        </div>
        {repositories ? (
          <div className="row-repository">
            <i className="fa fa-book"></i>
            <p>Repository Lists :</p>
          </div>
        ) : (
          <></>
        )}
        {repositories.length > 0 ? (
          repositories.map((repo) => {
            return (
              <div key={repo.id}>
                <a
                  href={`${repo.html_url}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {repo.name}
                </a>
              </div>
            );
          })
        ) : (
          <p>No Repository Available</p>
        )}
        {repositories ? (
          <Navigation
            currentPage={currentPageRepo}
            next={nextRepo}
            previous={previousRepo}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default RepositoryList;
