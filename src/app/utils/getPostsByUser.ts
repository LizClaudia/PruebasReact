import { api, Post } from "../services/posts_service";

export const getPostsByUser = async (id: number): Promise<Post[]> => {
    const { data } = await api.get<Post[]>(`/?userId=${id}`);

    return data;
};
