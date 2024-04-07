// api/index.js

import axios from 'axios';

const BASE_URL = 'https://hvserp.com';

// Set common headers
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['accept'] = 'application/json';

const apiRequest = async ({method = 'GET', url, headers = {}, data = null}) => {
  try {
    const response = await axios({
      method,
      url: BASE_URL + url,
      headers: {
        ...headers,
        // Add any common headers here
      },
      data,
    });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const get = async (url, headers) => {
  return await apiRequest({method: 'GET', url, headers});
};

export const post = async (url, data, headers) => {
  return await apiRequest({method: 'POST', url, headers, data});
};

// Add other HTTP methods as needed (e.g., PUT, DELETE, etc.)

export const getWithToken = async (url, token) => {
  console.log(token, 'debug');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return await get(url, headers);
};

export const makeApiRequest = async (url, token, method, requestData) => {
  try {
    // Set the authorization header with the token value
    const headers = {
      Authorization: token,
    };

    // Make the request based on the method
    let response;
    if (method === 'GET') {
      response = await axios.get(url, { headers });
    } else if (method === 'POST') {
      response = await axios.post(url, requestData, { headers });
    }

    // Handle response data if needed
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    // Handle errors here
    throw error; // Re-throwing the error to be caught by the caller
  }
};


// You can also create similar functions for other HTTP methods with a token in the header
