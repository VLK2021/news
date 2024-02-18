import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsService} from "../../services/news.service";


export const getTopUs = createAsyncThunk(
    'topNewsUsSlice/getTopUs',
    async (_, {rejectWithValue}) => {
        try {
            return  await newsService.getTopUS();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    topNewsUs: [],
    userNewsUs: [],
    status: null,
    error: '',
}

const topNewsUsSlice = createSlice({
    name: 'topNewsUsSlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getTopUs.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getTopUs.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.topNewsUs = action.payload.articles;
            })

            .addCase(getTopUs.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    },
});

export default topNewsUsSlice.reducer;