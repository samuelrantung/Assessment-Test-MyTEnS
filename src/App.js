import axios, { Axios } from "axios";
import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userDetail, setUserDetail] = useState({});
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [repositoryOpen, setRepositoryOpen] = useState(false);
  const Search = (e) => {
    axios
      .get(`https://api.github.com/search/users?q=${search}+in:user`)
      .then((res) => {
        setUsers(res.data.items);
        console.log(res.data.items);
        // setUsersWithDetails(res.data.)
      });
  };
  const OpenRepository = async (user) => {
    // console.log(user);
    axios.get(`${user.url}`).then((res) => setUserDetail(res.data));
    axios.get(`${user.repos_url}`).then((repo) => setRepositories(repo.data));
    setRepositoryOpen(!repositoryOpen);
  };
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">GitHub API</h1>
        <i className="fa fa-github fa-inverse fa-2x"></i>
      </header>
      <div className="body">
        <div className="form">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Search User Name"
            className="user-name-input"
            onChange={(val) => setSearch(val.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Search();
              }
            }}
          ></input>
          <i className="fa fa-search" onClick={() => Search()}></i>
        </div>
        {repositoryOpen ? (
          <>
            <div
              className="overlay"
              onClick={() => setRepositoryOpen(!repositoryOpen)}
            ></div>
            <div className="detail-container">
              <img
                src={`${userDetail.avatar_url}`}
                alt="avatar"
                className="avatar"
              ></img>
              <h3>{userDetail.name}</h3>
              <h3>{userDetail.login}</h3>
              {repositories ? (
                repositories.map((repo) => {
                  return <p>{repo.name}</p>;
                })
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="card-container">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="user-card"
                onClick={() => OpenRepository(user)}
              >
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="avatar"
                ></img>
                <div>
                  <h3>{user.login}</h3>
                  {/* <h2>{userDetail.name}</h2> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
