// redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Check if user session exists
const storedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: storedUser || null,  // Persist session
        isAuthenticated: !!storedUser,  // Check if logged in
    },
    reducers: {
        signUp: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload));  // Store user in session
        },
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("user"); // Clear session
        },
    },
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;
