import axios from "axios"
const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL
export const API = axios.create({baseURL: BASE_URL});
console.log(BASE_URL);