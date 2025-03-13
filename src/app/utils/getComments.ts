import { api, Comments } from "../services/posts_service";

export const getComments = async (): Promise<Comments[]> => {
    const { data } = await api.get<Comments[]>(`/comments`);
    return data;
};
