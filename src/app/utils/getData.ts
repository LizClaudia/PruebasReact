import { api, ResponseApi } from "../services/posts_service";

export const getPosts = async (): Promise<ResponseApi[]> => {
    const {data} = await api.get('?_limit=6');
    return data;
}