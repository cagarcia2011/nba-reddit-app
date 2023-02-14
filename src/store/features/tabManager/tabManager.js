import { createSlice } from "@reduxjs/toolkit";
import { tabs } from "../../../configuration";

const tabMap = {}

const availableTabs = tabs.map(tab => {
    tabMap[tab.name] = {
        title: tab.title,
        path: tab.path
    }
    return tab.name
})

const getCurrentDefaultTab = () => {
    let currentDefaultTab = 
        !('default-tab' in localStorage) ?
        "hot" :
        localStorage.getItem('default-tab')

    if (!availableTabs.includes(currentDefaultTab)) {
        currentDefaultTab = "hot"
        localStorage.setItem('default-tab', currentDefaultTab)
    }
    
    return currentDefaultTab
}


const initialState = {
    currentTab: "hot",
    currentPath: "/",
    defaultTab: getCurrentDefaultTab(),
    availableTabs,
    tabMap
}

const tabManagerSlice = createSlice({
    name: "tabManager",
    initialState,
    reducers: {
        goTo(state, action) {
            const tab = action.payload
            if (!availableTabs.includes(tab)) {
                console.log(tab)
            }

            let path = "/"
            if (tab !== "home") path += tab

            state.currentTab = tab
            state.currentPath = path
        },
        setDefaultTab(state, action) {
            const tab = action.payload
            if (!availableTabs.includes(tab)) return

            state.defaultTab = tab
            localStorage.setItem("default-tab", tab)
        },
        setCurrentTab(state, action) {
            state.currentTab = action.payload
            let path = "/"
            if (action.payload !== "home") path += action.payload
            state.currentPath = path
        }
    }
})

export const tabManagerReducer = tabManagerSlice.reducer
export const { goTo, setDefaultTab, setCurrentTab } = tabManagerSlice.actions
export default tabManagerSlice