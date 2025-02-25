import axios from "axios";
import { getServiceUrl } from "./helpers/services.helpers";
import { APIS } from "../constants/api.constants";

export const api = axios.create({
  baseURL: getServiceUrl(APIS.APP_SERVICE_URL),
});

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
