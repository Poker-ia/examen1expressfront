import axios from "axios";

export const api = axios.create({
    baseURL:'https://examen1express.onrender.com/api'
})