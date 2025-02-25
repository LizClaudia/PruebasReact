import { api, Post } from "../services/posts_service";

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await api.get("?_limit=6");
  return data;
};
