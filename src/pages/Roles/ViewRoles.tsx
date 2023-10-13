import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRoles } from "../../api/Role";

type Roles = {
  data: {
    id: number;
    description: string;
    users: { id: number; name: string; email: string }[];
  }[];
};

const ViewRoles = () => {
  const [data, setData] = useState<Roles>({} as Roles);
  const fetchData = () => {
    getRoles().then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: "10px 30px",
      }}
    >
      <Link to="/">
        <button
          style={{
            margin: "5px",
            padding: "5px 10px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      </Link>
      <h2>Roles</h2>
      {data.data?.map((info) => {
        return (
          <div key={info.id} style={{ margin: "3px 0px" }}>
            <div>Description: {info.description}</div>
            <div>
              Users:
              {info.users.map((user) => {
                return (
                  <div
                    key={user.id}
                    style={{
                      marginLeft: "10px",
                      padding: "10px",
                      borderBottom: "1px solid #bfbfbf",
                    }}
                  >
                    <div>Name: {user.name}</div>
                    <div> Email: {user.email}</div>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ViewRoles;
