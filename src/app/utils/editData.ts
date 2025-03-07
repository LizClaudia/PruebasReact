import { api, Post } from "../services/posts_service";

export const getPost = async (id: number): Promise<Post> => {
    const { data } = await api.get<Post>(`/${id}`);
    return data;
};

export const editPost = async (
    id: number,
    title: string,
    body: string
): Promise<Post> => {
    const { data } = await api.put<Post>(`/${id > 100 ? 100 : id}`, {
        title,
        body,
    });
    return data;
};
