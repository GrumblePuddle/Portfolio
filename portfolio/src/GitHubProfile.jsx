import React, { useState } from "react";

function GitHubProfile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>GitHub Profile Viewer</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchGitHubData}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading && <div className="spinner"></div>}

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <img src={userData.avatar_url} alt="Avatar" width={100} />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <p>Repos: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubProfile;
