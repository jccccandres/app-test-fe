import React, { useState } from "react";

const Add = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Add User</h2>

      <div>
        <label>Full Name</label>
        <input type="text" value={fullname} onChange={handleChangeFullName} />
      </div>

      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={handleChangeEmail} />
      </div>
    </div>
  );
};

export default Add;
