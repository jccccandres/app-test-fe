import { useEffect, useState } from "react";
import { getUsers } from "../../api/User";

type Users = {
  data: {
    id: number;
    name: string;
    email: string;
    roles: { id: number; description: string }[];
  }[];
};

const ViewUsers = () => {
  const [data, setData] = useState<Users>({} as Users);
  const fetchData = () => {
    getUsers().then((response) => {
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
      <h2>Users</h2>
      {data.data?.map((info) => {
        return (
          <div key={info.id} style={{ margin: "3px 0px" }}>
            <div>Name: {info.name}</div>
            <div>Email: {info.email}</div>
            <div>
              Roles:
              {info.roles.map((role) => {
                return (
                  <div key={role.id} style={{ marginLeft: "10px" }}>
                    - {role.description}
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

export default ViewUsers;
