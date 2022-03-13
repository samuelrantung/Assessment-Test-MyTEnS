import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  RepositoryList,
  SearchBar,
  Header,
  Navigation,
  UserCards,
} from "./components";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageRepo, setCurrentPageRepo] = useState(1);
  const [userDetail, setUserDetail] = useState({});
  const [search, setSearch] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [repositoryOpen, setRepositoryOpen] = useState(false);

  useEffect(() => {
    axios.get("https://api.github.com/search/users?q=in:user").then((res) => {
      setUsers(res.data.items);

      console.log("axios first");
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="body">
        <SearchBar setSearch={setSearch} search={search} setUsers={setUsers} />
        {repositoryOpen ? (
          <RepositoryList
            setRepositoryOpen={setRepositoryOpen}
            repositoryOpen={repositoryOpen}
            userDetail={userDetail}
            repositories={repositories}
            currentPageRepo={currentPageRepo}
            setCurrentPageRepo={setCurrentPageRepo}
            setRepositories={setRepositories}
          />
        ) : (
          <></>
        )}
        <UserCards
          users={users}
          setUserDetail={setUserDetail}
          setRepositories={setRepositories}
          setRepositoryOpen={setRepositoryOpen}
          repositoryOpen={repositoryOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          search={search}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
};

export default App;
