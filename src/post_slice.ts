import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../src/app/services/posts_service";
import { getPosts } from "./app/utils/getData";
import { createPost } from "./app/utils/postData";

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
// Estado inicial tipado como un array de `Post`
const initialState: Post[] = [];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        deletePost: (state, action: PayloadAction<number>) => {
            return state.filter((post) => post.id !== action.payload);
        },

        updatePost: (state, action) => {
            const { id, title, body } = action.payload;
            const post = state.find((p) => p.id === id);
            if (post) {
                post.title = title;
                post.body = body;
            }
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchPosts.fulfilled, (state, action) => {
                return action.payload;
            })

            .addCase(addPost.fulfilled, (state, action) => {
                state.push(action.payload);
            });
    },
});

export const { deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
