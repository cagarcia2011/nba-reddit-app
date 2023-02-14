import { createSlice } from "@reduxjs/toolkit";

import { createFetchThunk } from "../fetch/fetchRedditData";

export const fetchNBARedditListings = createFetchThunk('nbaRedditListings/fetchData')
export const rootPath = "nba"

const initialState = {
    data: [],
    error: null,
    loading: false,
}

const nbaRedditListingSlice = createSlice({
    name: 'nbaRedditListings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNBARedditListings.pending, (state, action) => {
                state.data = []
                state.error = null
                state.loading = true
            })
            .addCase(fetchNBARedditListings.fulfilled, (state, action) => {
                state.data = action.payload
                state.error = null
                state.loading = false
            })
            .addCase(fetchNBARedditListings.rejected, (state, action) => {
                state.data = []
                state.error = action.payload
                console.log(action.payload)
                state.loading = false
            })
    }
})

export const nbaRedditListingReducer = nbaRedditListingSlice.reducer

export default nbaRedditListingSlice