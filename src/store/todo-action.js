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

export const sendTaskData = (task) => {
  return async (dispatch) => {
    dispatch(
      uiAction.changeLoading({
        isLoading: true,
      })
    );

    const sendRequest = async () => {
      const response = await fetch("http://localhost:3000/todos", {
        method: "PUT",
        body: JSON.stringify({
          items: task.items,
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
