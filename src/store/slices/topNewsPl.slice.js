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
    isFastenPL: 0,
    status: null,
    error: '',
}

const topNewsPlSlice = createSlice({
    name: 'topNewsPlSlice',
    initialState,

    reducers: {
        addUserNewsPL: (state, action) => {
            state.userNewsPL = [...state.userNewsPL, action.payload];
        },

        deleteNewsPL: (state, action) => {
            state.userNewsPL = state.userNewsPL.filter(item => item.id !== action.payload);
        },

        fastenUserNewsPL: (state, action) => {
            state.userNewsPL = action.payload;
        },

        changeIsFastenPL: (state, action) => {
            state.isFastenPL = action.payload;
        }
    },

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

const {actions: {addUserNewsPL, deleteNewsPL, fastenUserNewsPL, changeIsFastenPL}} = topNewsPlSlice;
const addUserNewsPLActions = {addUserNewsPL, deleteNewsPL, fastenUserNewsPL, changeIsFastenPL};

export {addUserNewsPLActions};
export default topNewsPlSlice.reducer;