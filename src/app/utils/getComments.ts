import { commentsApi, Comments } from "../services/posts_service";

export const getComments = async (): Promise<Comments[]> => {
    const { data } = await commentsApi.get<Comments[]>(``);
    return data;
};
