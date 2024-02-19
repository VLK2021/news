import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {newsService} from "../../services/news.service";


export const getTopUa = createAsyncThunk(
    'topNewsUaSlice/getTopUa',
    async (_, {rejectWithValue}) => {
        try {
            return await newsService.getTopUA();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    topNewsUa: [],
    userNewsUa: [],
    isFastenUa: 0,
    status: null,
    error: '',
}

const topNewsUaSlice = createSlice({
    name: 'topNewsUaSlice',
    initialState,

    reducers: {
        addUserNews: (state, action) => {
            state.userNewsUa = [...state.userNewsUa, action.payload];
        },

        fastenUserNews: (state, action) => {
            state.userNewsUa = action.payload;
        },

        deleteNewsUa: (state, action) => {
            state.userNewsUa = state.userNewsUa.filter(item => item.id !== action.payload);
        },

        changeIsFastenUa: (state, action) => {
            state.isFastenUa = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTopUa.pending, (state) => {
                state.status = 'loading.';
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

const {actions: {addUserNews, deleteNewsUa, fastenUserNews, changeIsFastenUa}} = topNewsUaSlice;
const addUserNewsAction = {addUserNews, deleteNewsUa, fastenUserNews, changeIsFastenUa};
export {addUserNewsAction};

export default topNewsUaSlice.reducer;