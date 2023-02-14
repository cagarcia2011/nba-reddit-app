import { configureStore } from "@reduxjs/toolkit";
import { nbaRedditListingReducer, themeReducer, tabManagerReducer } from "./features";

const reducer = {
    nbaRedditListings: nbaRedditListingReducer,
    theme: themeReducer,
    tabManager: tabManagerReducer,
}

export default configureStore({
    reducer,
})