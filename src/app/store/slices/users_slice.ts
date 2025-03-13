import { User } from "@/app/services/posts_service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getUsers } from "../../utils/getUsers";

const initialState: User[] = [];

export const fetchUsers = createAsyncThunk<User[]>("/users", async () => {
    const response = await getUsers();
    return response;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, () => {
                console.log("Cargando usuarios");
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload;
            })

            .addCase(fetchUsers.rejected, (state, action) => {
                console.error("Error añ obtener usuarios: ", action.error);
            });
    },
});

export const selectUsers = (state: RootState) => state.comments;

export default usersSlice.reducer;
