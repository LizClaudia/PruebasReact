import { api, Post } from "../services/posts_service";

export const createPost = async (
    title: string,
    body: string
): Promise<Post> => {
    const { data } = await api.post("", { title, body });
    return data;
};
