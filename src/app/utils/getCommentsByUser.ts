import { commentsApi, Comments } from "../services/posts_service";

export const getCommentsByUser = async (id: number): Promise<Comments[]> => {
    const { data } = await commentsApi.get<Comments[]>(`/?userId=${id}`);
    return data;
};
