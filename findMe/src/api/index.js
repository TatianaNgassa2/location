import axios from "axios";


// Base URL for the hosted API for development environment
export const baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(process.env.REACT_APP_BACKEND_URL)
const instance = axios.create({
  baseURL,
  timeout: 30000,
});

export default instance
