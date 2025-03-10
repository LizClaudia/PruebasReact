import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommentsByUser } from "../../utils/getCommentsByUser";
import { Comments } from "../../services/posts_service";
import { RootState } from "../store";

// Estado inicial: un array vacío de comentarios
const initialState: Comments[] = [];

// Thunk para obtener comentarios por usuario
export const fetchCommentsByUser = createAsyncThunk<Comments[], number>(
    "comments/fetchCommentsByUser",
    async (userId) => {
        const response = await getCommentsByUser(userId);
        return response;
    }
);

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {}, // Aquí puedes agregar reducers síncronos si los necesitas
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByUser.pending, () => {
                // Puedes manejar un estado de carga aquí si necesitas
                console.log("Cargando comentarios...");
            })
            .addCase(fetchCommentsByUser.fulfilled, (state, action) => {
                return action.payload; // Reemplaza el estado con los nuevos comentarios
            })
            .addCase(fetchCommentsByUser.rejected, (state, action) => {
                console.error("Error al obtener comentarios:", action.error);
            });
    },
});

// Selector para obtener los comentarios desde el store
export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;
