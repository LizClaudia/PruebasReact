import { api, ResponseApi } from "../services/posts_service";

export const createPost = async (title:string, body:string,): Promise<ResponseApi[]> => {
    const {data} = await api.post('',{ title, body });
    return data;
}