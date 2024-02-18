import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsService} from "../../services/news.service";


export const getSearchEverythingNews = createAsyncThunk(
    'searchEverythingNewsSlice/getSearchEverythingNews',
    async ({current, page}, {rejectWithValue, dispatch}) => {
        try {
            return  await newsService.getSearchEverything(current, page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    searchEverythingNews: [],
    page: 1,
    status: null,
    error: '',
}

const searchEverythingNewsSlice = createSlice({
    name: 'searchEverythingNewsSlice',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getSearchEverythingNews.pending, (state) => {
                state.status = 'loading...';
            })

            .addCase(getSearchEverythingNews.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.searchEverythingNews = action.payload.articles;
            })

            .addCase(getSearchEverythingNews.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            });
    }
});

export default searchEverythingNewsSlice.reducer;