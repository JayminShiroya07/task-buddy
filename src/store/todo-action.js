import { useParams } from "react-router-dom";
import { todoActions } from "./todoSlice";
import { uiAction } from "./uiSlice";

export const fetchTaskData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos");

      if (!response.ok) {
        console.log("error -> ");
        dispatch(
          uiAction.setError({
            isError: true,
            error: {
              status: 400,
              message: "failed to load task",
            },
          })
        );
      }

      const data = await response.json();

      return data;
    };

    try {
      const taskData = await fetchData();

      dispatch(
        todoActions.replaceTodos({
          todos: taskData,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setError({
          isError: true,
          error: error,
        })
      );
    }
  };
};

export const sendTaskData = (method,todo) => {

  let url = "http://localhost:3000/todos";

  if(method === "PATCH"){
    url += "/"+todo.id
  }

  return async (dispatch) => {
    dispatch(
      uiAction.changeLoading({
        isLoading: true,
      })
    );

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify({
          task : todo.task
        }),
      });

      if (!response.ok) {
        console.log("error -> ");
        dispatch(
          uiAction.setError({
            isError: true,
            error: {
              status: 400,
              message: "failed to load task",
            },
          })
        );
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.changeLoading({
          isLoading: false,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setError({
          isError: true,
          error: error,
        })
      );
    }
  };
};

export const fetchTaskDataById = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos/"+id);

      if (!response.ok) {
        console.log("error -> ");
        dispatch(
          uiAction.setError({
            isError: true,
            error: {
              status: 400,
              message: "failed to load task",
            },
          })
        );
      }

      const data = await response.json();

      return data;
    };

    try {
      const taskData = await fetchData();
      dispatch(
        todoActions.replaceSelectedTodo({
          todo: taskData,
        })
      );
    } catch (error) {
      console.log("error => ", error);
      dispatch(
        uiAction.setError({
          isError: true,
          error: error,
        })
      );
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos/"+id,{
        method: 'DELETE'
      });

      if (!response.ok) {
        console.log("error -> ");
        dispatch(
          uiAction.setError({
            isError: true,
            error: {
              status: 400,
              message: "failed to load task",
            },
          })
        );
      }

      const data = await response.json();

      return data;
    };

    try {
      const taskData = await fetchData();
    } catch (error) {
      console.log("error => ", error);
      dispatch(
        uiAction.setError({
          isError: true,
          error: error,
        })
      );
    }
  };
}

export const searchTaskByStatus = (status) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos?task.status="+status);

      if (!response.ok) {
        console.log("error -> ");
        dispatch(
          uiAction.setError({
            isError: true,
            error: {
              status: 400,
              message: "failed to load task",
            },
          })
        );
      }

      const data = await response.json();

      return data;
    };

    try {
      const taskData = await fetchData();

      dispatch(
        todoActions.replaceTodos({
          todos: taskData,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setError({
          isError: true,
          error: error,
        })
      );
    }
  };
}