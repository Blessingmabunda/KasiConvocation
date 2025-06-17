import axios from "axios";

const httpService = axios.create({
  baseURL: "https://testlimeloansapigateway.softidoc.co.za",
  headers: {
    "Content-Type": "application/json-patch+json", 
    "accept": "*/*"
  },
});

const MAX_RETRIES = 3;

httpService.interceptors.response.use(
  (response) => {
    if (response.data === null) {
      console.log("Received null response, retrying...");
      return retryRequest(response.config);
    }
    return response;
  },
  (error) => {
    console.error('Detailed API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config
    });
    return Promise.reject(error);
  }
);

const retryRequest = (config, retryCount = 1) => {
  if (retryCount <= MAX_RETRIES) {
    console.log(`Retrying request... Attempt #${retryCount}`);
    return axios(config).then((response) => response);
  } else {
    console.log("Max retries reached, giving up.");
    return Promise.reject("Max retries reached.");
  }
};

export default httpService;
