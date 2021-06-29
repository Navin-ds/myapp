import axios from "axios";
const url = "http://localhost:4000/courses";
export const fetchPosts = () => axios.get(url);
