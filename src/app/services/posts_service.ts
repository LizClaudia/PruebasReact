import axios from "axios";
import { getCommentsUrl, getServiceUrl } from "./helpers/services.helpers";
import { APIS } from "../constants/api.constants";

export const api = axios.create({
    baseURL: getServiceUrl(APIS.APP_SERVICE_URL),
});
export const commentsApi = axios.create({
    baseURL: getCommentsUrl(APIS.APP_COMMENTS_URL),
});
export interface Post {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}
export const EMPTY_POST: Omit<Post, "userId" | "id"> = {
    title: "",
    body: "",
};
export interface Comments {
    id: number;
    postId: number;
    body: string;
}

export interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
}
