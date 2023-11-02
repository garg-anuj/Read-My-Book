import axios from "axios";
import { IMG_URL } from "./constants/urls";

export async function getMethod(url) {
  try {
    const apiDataResponse = await axios.get(url);
    return apiDataResponse.data;
  } catch (error) {
    console.error("error fetching youtubeData", error);
  }
}

export async function postMethod(url, payload) {
  try {
    const apiDataResponse = await axios.post(url, payload);
    const apiData = apiDataResponse.data;
    return apiData;
  } catch (error) {
    console.log("error in postApiResponse", error);
  }
}

export async function putMethod(url, payload) {
  try {
    const response = await axios.put(url, payload);
    const apiData = response.data;
    return apiData;
  } catch (error) {
    console.log(error);
  }
}

export function handleImageLinkError(event) {
  event.target.onerror = null;
  event.target.src = IMG_URL + "train";
}
