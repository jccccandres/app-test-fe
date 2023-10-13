import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../api/User";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRoles([...roles, e.target.value]);
    } else {
      let temp = roles;
      temp.splice(roles.indexOf(e.target.value), 1);
      setRoles(temp);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addUser({ name, email, roles })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          navigate("/view-users");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  const defaultRoles = [
    {
      id: 1,
      description: "Author",
    },
    {
      id: 2,
      description: "Editor",
    },
    {
      id: 3,
      description: "Subscriber",
    },
    {
      id: 4,
      description: "Administrator",
    },
  ];

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
      <h2>Add User</h2>

      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5px",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Full Name</label>
          <input
            type="text"
            style={{ fontSize: "23px", padding: "5px 10px" }}
            value={name}
            onChange={handleChangeFullName}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 5px",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Email</label>
          <input
            type="text"
            style={{ fontSize: "23px", padding: "5px 10px" }}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 5px",
          }}
        >
          <label style={{ marginBottom: "5px" }}>Roles</label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {defaultRoles.map((role) => {
              return (
                <label
                  key={role.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "20px", height: "20px" }}
                    value={role.id}
                    onChange={handleCheckBox}
                  />
                  <span>{role.description}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            type="submit"
            style={{ padding: "5px 10px", fontSize: "17px", cursor: "pointer" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
