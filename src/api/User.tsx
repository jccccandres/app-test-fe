import axiosInstance from "./AxiosInstance";

const getUsers = async () => {
  return await axiosInstance.get("users");
};

const addUser = async (data: {
  name: string;
  email: string;
  roles: string[];
}) => {
  return await axiosInstance.post("users", data);
};

export { getUsers, addUser };
