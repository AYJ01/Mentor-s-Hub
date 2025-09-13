import axios from "axios";

const api = () => {
  const baseURL = "http://127.0.0.1:8000/";

  const instance = axios.create({
    baseURL,
  });

  const dataApi = async (textUrl, method, dat = {}) => {
    method = method.toUpperCase();

    try {
      let response;

      if (method === "GET" || method === "DELETE") {
        response = await instance.request({
          url: textUrl,
          method,
          params: dat,
        });
      } else if (method === "POST" || method === "PUT") {
        if (dat instanceof FormData) {
          response = await instance.request({
            url: textUrl,
            method,
            data: dat,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          // Normal JSON request
          response = await instance.request({
            url: textUrl,
            method,
            data: dat,
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      } else {
        throw new Error(`Unsupported method: ${method}`);
      }

      return response.data;
    } catch (err) {
      if (err.response) {
        console.error(`❌ API Error ${err.response.status}:`, err.response.data);
        throw new Error(
          `Error ${err.response.status}: ${JSON.stringify(err.response.data)}`
        );
      } else if (err.request) {
        console.error("❌ No response from server:", err.request);
        throw new Error("No response from server");
      } else {
        console.error("❌ Axios error:", err.message);
        throw err;
      }
    }
  };

  return { dataApi };
};

export default api;
