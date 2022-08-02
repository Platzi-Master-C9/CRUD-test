import axios from "axios";

const getUsers = async () => {
  const response = await axios({
    method: "get",
    url: "https://gorest.co.in/public/v2/users",
  });
  return response;
};

getUsers();
console.log(getUsers);

export default getUsers;
