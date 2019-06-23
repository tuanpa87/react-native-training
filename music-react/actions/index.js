import axios from "axios";
import _ from "lodash";
import API_KEY from "./key";

const instance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 2000,
  headers: { "X-RapidAPI-Key": API_KEY }
});

export const searchTracks = name =>
  instance
    .get(`search?q=${name}`)
    .then(res => _.uniqBy(res.data.data.map(item => item.album), "title"));
