import axios from "axios";

const HttpService = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getCharacters = () => {
  return HttpService.get("character");
};
