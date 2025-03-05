import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainNavigation from './components/MainNavigation'
import NotFound from './components/NotFound'
import Tasks from './components/Tasks'
import EditTask from './components/EditTask'
import TaskNavigation from './components/TaskNavigation'
import AddTask from './components/AddTask'
import store from './store/index'
import { Provider } from 'react-redux'
import {action as addTaskAction} from './components/TodoForm'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainNavigation />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'Tasks',
          element: <TaskNavigation />,
          children: [
            {
              index: true,
              element: <Tasks />
            },
            {
              path: 'AddTask',
              element: <AddTask />,
              action : addTaskAction
            },
            {
              path: ':taskId',
              element: <EditTask />
            }
          ]
        },

      ]
    }
  ])


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
