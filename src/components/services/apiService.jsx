import customAxios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return customAxios.post("api/v1/participant", data);
};
const getAllUsers =()=>{
  return customAxios.get("api/v1/participant/all");

}
export {postCreateNewUser,getAllUsers}