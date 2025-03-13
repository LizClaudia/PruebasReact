import { api } from "../services/posts_service";

export const deletePost = async (id: number): Promise<number> => {
    await api.delete(`posts/${id}`);
    return id;
};
