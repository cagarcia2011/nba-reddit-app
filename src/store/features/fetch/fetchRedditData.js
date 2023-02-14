import { createAsyncThunk } from "@reduxjs/toolkit";

export const baseUrl = "https://www.reddit.com/r/"

const constructUrl = (tab) => {
    return `${baseUrl}${tab}.json`
}

const constructSearchUrl = (tab, searchTerm) => {
    const url = constructUrl(tab+"/search")

    return `${url}?q=${searchTerm}&restrict_sr=1`
}

const fetchReddit = async (tab, searchTerm=null) => {
    const fetchUrl = (searchTerm===null || searchTerm==="") ? 
                        constructUrl(tab) : 
                        constructSearchUrl(tab, searchTerm)
    const response = await fetch(
        fetchUrl
    )

    const data = await response.json()

    return data
}

export const createFetchThunk = (type) => {
    return createAsyncThunk(
        type,
        async ({ tab, searchTerm}, thunkAPI) => {
            try {
                const response = await fetchReddit(tab, searchTerm)
                return response.data.children
            } catch (e) {
                thunkAPI.rejectWithValue(e.message)
            }
        }
    )
}