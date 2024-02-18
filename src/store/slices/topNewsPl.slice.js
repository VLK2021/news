import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsService} from "../../services/news.service";


export const getTopPl = createAsyncThunk(
    'topNewsPlSlice/getTopPl',
    async (_, {rejectWithValue}) => {
        try {
           return await newsService.getTopPL();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    topNewsPl: [],
    userNewsPL: [],
    status: null,
    error: '',
}

const topNewsPlSlice = createSlice({
    name: 'topNewsPlSlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getTopPl.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getTopPl.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.topNewsPl = action.payload.articles;
            })

            .addCase(getTopPl.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    },
});

export default topNewsPlSlice.reducer;