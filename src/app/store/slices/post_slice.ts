import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../utils/getData";
import { Post } from "../../services/posts_service";
import { createPost } from "../../utils/postData";
import { editPost } from "../../utils/editData";
import { RootState } from "../store";
import { deletePost } from "../../utils/deleteData";

export const fetchPosts = createAsyncThunk<Post[], void>(
    "posts/fetchPosts",
    async () => {
        const response = await getPosts();
        return response; // Ya es un `Post[]`, no hace falta modificarlo
    }
);

export const addPost = createAsyncThunk<Post, { title: string; body: string }>(
    "posts/addPost",
    async (newPost) => {
        const response = await createPost(newPost.title, newPost.body);
        return response;
    }
);

export const fetchPostById = createAsyncThunk<Post, number>(
    "posts/fetchPostById",
    async (postId) => {
        const response = await getPosts(); // Obtener todos los posts
        const post = response.find((p) => p.id === postId);
        if (!post) throw new Error("Post no encontrado");
        return post;
    }
);
export const selectPostById = (state: RootState, postId: number) =>
    state.posts.find((post) => post.id === postId);

export const updatePost = createAsyncThunk<
    Post,
    { title: string; body: string; id: number }
>("posts/editPost", async (editedPost) => {
    console.log("Estop es es el slice");
    console.log(editPost);
    const response = await editPost(
        editedPost.id,
        editedPost.title,
        editedPost.body
    );
    console.log("Este es el reponse del slice");
    console.log(response);
    return response;
});
export const erasePost = createAsyncThunk(
    "posts/deletePost",
    async (postId: number) => {
        await deletePost(postId); // Asegúrate de que `api` sea tu instancia de Axios
        return postId; // Retorna el ID del post eliminado
    }
);

// Estado inicial tipado como un array de `Post`
const initialState: Post[] = [];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchPosts.fulfilled, (state, action) => {
                return action.payload;
            })

            .addCase(addPost.fulfilled, (state, action) => {
                state.push(action.payload);
            });
        builder
            .addCase(fetchPostById.fulfilled, (state, action) => {
                const existingPost = state.find(
                    (post) => post.id === action.payload.id
                );
                if (!existingPost) {
                    state.push(action.payload);
                }
            })

            .addCase(updatePost.fulfilled, (state, action) => {
                const originalId = action.meta.arg.id;
                const index = state.findIndex((post) => post.id === originalId);
                if (index !== -1) {
                    state[index] = {
                        ...state[index],
                        ...action.payload,
                        id: originalId,
                    };
                }
            })
            .addCase(erasePost.fulfilled, (state, action) => {
                return state.filter((post) => post.id !== action.payload);
            });
    },
});

export default postSlice.reducer;
