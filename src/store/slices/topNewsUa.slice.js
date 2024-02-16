import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsService} from "../../services/news.service";


export const getTopUa = createAsyncThunk(
    'topNewsUaSlice/getTopUa',
    async (_, {rejectWithValue}) => {
        try {
            const topUa = await newsService.getTopUA();
            return topUa;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    topNewsUa: [],
    status: null,
    error: '',
}

const topNewsUaSlice = createSlice({
    name: 'topNewsUaSlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getTopUa.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getTopUa.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.topNewsUa = action.payload.articles;
            })

            .addCase(getTopUa.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    },
});

export default topNewsUaSlice.reducer;