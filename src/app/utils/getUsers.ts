import { api, User } from "../services/posts_service";

export const getUsers = async (): Promise<User[]> => {
    const { data } = await api.get<User[]>(`/users`);
    return data;
};
