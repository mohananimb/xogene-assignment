import axios from "axios";
import apiEndpoints from "./api-endpoints";

const BASE_URL = "https://rxnav.nlm.nih.gov/REST";

export const useApi = () => {
  const api = () => {
    const apiHeader = {
      "Content-Type": "application/json",
    };
    const apiConfig = axios.create({
      baseURL: BASE_URL,
      headers: apiHeader,
    });

    apiConfig.interceptors.request.use(async (config) => {
      return config;
    });

    apiConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        throw error;
      }
    );
    return apiConfig;
  };

  return { api, apiEndpoints };
};
