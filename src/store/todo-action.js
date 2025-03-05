import { todoActions } from "./todoSlice";
import { uiAction } from "./uiSlice";

export const fetchTaskData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:d3000/todos");

      if (!response.ok) {
        dispatch(uiAction.setError({
            isError : true,
            error : {
                status : 400,
                message : "failed to load task"
            }
        }));
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
        console.log(error)
      dispatch(
        uiAction.setError({
          error: error,
        })
      );
    }
  };
};

// export const 