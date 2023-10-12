import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>App Test</h2>
      <div style={{ display: "flex" }}>
        <Link to="/add-user">
          <button
            style={{
              margin: "5px",
              padding: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Add User
          </button>
        </Link>

        <Link to="/view-users">
          <button
            style={{
              margin: "5px",
              padding: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            View Users
          </button>
        </Link>

        <Link to="/view-roles">
          <button
            style={{
              margin: "5px",
              padding: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            View Roles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
