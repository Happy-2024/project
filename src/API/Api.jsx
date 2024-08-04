import axios from "axios";
import md5 from "md5";
const apiRequest = async (url, requestData,input_token) => {
  try {
    let salt = "LK@$$$@2022";
    const authToken = md5(salt + input_token);
    var auth = { auth_token: authToken };
    var mergerequest = { ...auth, ...requestData };
    const response = await axios.post(
      process.env.REACT_APP_API_URL + url,
      mergerequest,
      {
        headers: {
          Authorization: `JWT Token ${"44b6d3e34110ba8c7030cb76185a548f"}`, // Add JWT token to headers
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default apiRequest;
