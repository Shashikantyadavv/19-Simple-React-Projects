import React, { useEffect, useState } from "react";

const GithubFinder = () => {
  const [searchText, setSearchText] = useState("shashikantYadav");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGithubUserData();
    setSearchText("");
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${searchText}`);
    const profile = await response.json();
    setData(profile);
    setLoading(false);
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div className="github-profile-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="search-by-username"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Github Username"
            />
            <button onClick={handleSubmit}>Search Profile</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GithubFinder;
