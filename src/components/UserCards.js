import axios from "axios";
import React from "react";
import { Navigation } from ".";

const UserCards = ({
  users,
  setUserDetail,
  setRepositories,
  setRepositoryOpen,
  repositoryOpen,

  currentPage,
  setCurrentPage,
  search,
  setUsers,
}) => {
  const OpenRepository = async (user) => {
    axios.get(`${user.url}`).then((res) => setUserDetail(res.data));
    axios.get(`${user.repos_url}`).then((repo) => setRepositories(repo.data));
    setRepositoryOpen(!repositoryOpen);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };
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
    <div className="card-container">
      {users.length > 1 ? (
        users.map((user) => {
          return (
            <div
              key={user.id}
              className="user-card"
              onClick={() => OpenRepository(user)}
            >
              <img src={user.avatar_url} alt="avatar" className="avatar"></img>
              <div>
                <h3>{user.login}</h3>
              </div>
            </div>
          );
        })
      ) : (
        <h3>No User Found</h3>
      )}
      {users.length > 0 ? (
        <Navigation currentPage={currentPage} next={next} previous={previous} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserCards;
