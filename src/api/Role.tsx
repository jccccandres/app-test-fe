import axiosInstance from "./AxiosInstance";

const getRoles = async () => {
  return await axiosInstance.get("roles");
};

export { getRoles };
