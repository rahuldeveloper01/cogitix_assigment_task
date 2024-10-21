import axios from "axios";


const API_ENDPOINT = "https://rickandmortyapi.com/api/";

const DataService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});

export default DataService;
