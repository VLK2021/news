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
    isFastenUs: 0,
    status: null,
    error: '',
}

const topNewsUsSlice = createSlice({
    name: 'topNewsUsSlice',
    initialState,

    reducers: {
        AddUserNewsUs: (state, action) => {
            state.userNewsUs = [...state.userNewsUs, action.payload];
        },

        deleteNewsUs: (state, action) => {
            state.userNewsUs = state.userNewsUs.filter(item => item.id !== action.payload);
        },

        fastenUserNewsUs: (state, action) => {
            state.userNewsUs = action.payload;
        },

        changeIsFastenUs: (state, action) => {
            state.isFastenUs = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getTopUs.pending, (state) => {
                state.status = 'loading!';
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

const {actions: {AddUserNewsUs, deleteNewsUs, changeIsFastenUs, fastenUserNewsUs}} = topNewsUsSlice;
const addUserNewsUsActions = {AddUserNewsUs, deleteNewsUs, changeIsFastenUs, fastenUserNewsUs};

export {addUserNewsUsActions};
export default topNewsUsSlice.reducer;