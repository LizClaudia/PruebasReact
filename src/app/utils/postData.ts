import { AxiosResponse } from "axios";
import { api, Post } from "../services/posts_service";

export const createPost = async (
    title: string,
    body: string
): Promise<Post> => {
    const { data } = await api.post<Post, AxiosResponse, Post>("posts", {
        title,
        body,
        userId: 1,
    });
    return data;
};
