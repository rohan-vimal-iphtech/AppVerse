import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text, content, isEditing, isUpdateMode } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
                todo.content = content;
                todo.isEditing = isEditing;
                todo.isUpdateMode = isUpdateMode;
            }
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
