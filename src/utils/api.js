import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";


const api = axios.create({
  baseURL: `https://authapiyurijar-hsdkdpdtchbhbmgs.brazilsouth-01.azurewebsites.net/api/auth`,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
