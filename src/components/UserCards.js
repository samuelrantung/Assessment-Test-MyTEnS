import axios from "axios";
import React from "react";

const UserCards = ({
  users,
  setUserDetail,
  setRepositories,
  setRepositoryOpen,
  repositoryOpen,
}) => {
  const OpenRepository = async (user) => {
    // console.log(user);
    axios.get(`${user.url}`).then((res) => setUserDetail(res.data));
    axios.get(`${user.repos_url}`).then((repo) => setRepositories(repo.data));
    setRepositoryOpen(!repositoryOpen);
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
                {/* <h2>{userDetail.name}</h2> */}
              </div>
            </div>
          );
        })
      ) : (
        <h3>No User Found</h3>
      )}
    </div>
  );
};

export default UserCards;
