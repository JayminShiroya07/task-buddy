import { createSlice } from "@reduxjs/toolkit";
import TaskList from "../Util/taskList";

const initialTodoState = {
  todos: [],
  selectedTodo: [],
  filteredTodo: []
};

const todoSlice = createSlice({
  name: "todoItems",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const newTask = action.payload;
      state.todos.push(newTask);
    },
    replaceTodos(state, action){
      state.todos = action.payload.todos;
      state.selectedTodo = [];
    },
    replaceSelectedTodo(state,action){
      state.selectedTodo = action.payload.todo.task;
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
