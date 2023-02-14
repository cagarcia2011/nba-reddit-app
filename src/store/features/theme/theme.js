import { createSlice } from "@reduxjs/toolkit";

const getPreferredTheme = () => {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"

    return preferredTheme
}

const getCurrentTheme = () => {
    const currentTheme = 
        !('color-theme' in localStorage) ? 
        getPreferredTheme() : 
        localStorage.getItem('color-theme')

    return currentTheme
}

const initialState = {
    preferred: getPreferredTheme(),
    selected: getPreferredTheme()
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            const currentTheme = getCurrentTheme()
            document.documentElement.classList.remove(currentTheme)
            const toggledTheme = 
                currentTheme === "dark" ?
                "light" :
                "dark"
            document.documentElement.classList.add(toggledTheme);
            
            state.selected = toggledTheme
            localStorage.setItem('color-theme', toggledTheme)
        },
        setAsPreferred(state) {
            const preferredTheme = getPreferredTheme()
            const currentTheme = getCurrentTheme()
            document.documentElement.classList.remove(currentTheme)

            state.preferred = preferredTheme
            state.selected = preferredTheme

            localStorage.setItem('color-theme', preferredTheme)
            document.documentElement.classList.add(preferredTheme);
        },
        setCurrentTheme(state) {

            const currentTheme = getCurrentTheme()

            state.selected = currentTheme
            localStorage.setItem('color-theme', currentTheme)
            document.documentElement.classList.add(currentTheme);
        }
    }
})

export const themeReducer = themeSlice.reducer
export const { toggleTheme, setAsPreferred, setCurrentTheme } = themeSlice.actions
export default themeSlice