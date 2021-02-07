import axios from "axios";
import { CATEGORIES_API } from "./config";



function find(page) {
  return axios
    .get(CATEGORIES_API + "?page=" + page)
    .then(response => response.data["hydra:member"]);
}


export default {
  find,
};