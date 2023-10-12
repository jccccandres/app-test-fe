import axiosInstance from "./AxiosInstance";

const getUsers = async () => {
  return await axiosInstance.get("users");
};

export { getUsers };
