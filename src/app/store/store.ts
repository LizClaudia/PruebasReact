import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../../app/store/slices/post_slice";
import commentsReducer from "../store/slices/comments_slice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentsReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
