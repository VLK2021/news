import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {newsService} from "../../services/news.service";


export const getSearchEverythingNews = createAsyncThunk(
    'searchEverythingNewsSlice/getSearchEverythingNews',
    async ({current, page}, {rejectWithValue}) => {
        try {
            return  await newsService.getSearchEverything(current, page);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getSearchNewsMore = createAsyncThunk(
    'searchEverythingNewsSlice/getSearchNewsMore',
    async ({current, page}, {rejectWithValue, dispatch}) => {
        try {
            const response = await newsService.getSearchEverything(current, page);
            dispatch(addSearchNews({response}));
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

    reducers: {
        changeSearchPage: (state, action) => {
            state.page = action.payload
        },

        addSearchNews: (state, action) => {
            action.payload.response.articles.map((n) => state.searchEverythingNews.push(n));
        }
    },

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

const {actions: {changeSearchPage, addSearchNews}} = searchEverythingNewsSlice;
const searchEverythingNewsActions = {changeSearchPage, addSearchNews};

export {searchEverythingNewsActions};
export default searchEverythingNewsSlice.reducer;