import { api, Post } from "../services/posts_service";

export const deletePost = async (id: number): Promise<Post> => {
    const { data } = await api.delete(`/${id}`);
    return data;
};
