import { createSlice } from "@reduxjs/toolkit";
import TaskList from "../Util/taskList";

const initialTodoState = {
  todos: [],
  selectedTodo: 0,
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
      state.selectedTodo = 0;
    },
    filterTodos(state, action){
      console.log(action.payload.search)
      if(action.payload.search === 'completed'){
        state.todos = state.todos.filter((todo) => todo.status === true);
        console.log(state.todos)
      }
      if(action.payload.search === "incomplete"){
        state.todos =  state.todos.filter((todo) => todo.status === false);
      }
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
