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
import { Provider, useSelector } from 'react-redux' 
import ErrorPage from './components/ErrorPage'

function App() {

  const ui = useSelector(state => state.ui);
  
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
          path:'Tasks',
          element: <TaskNavigation/>,
          path: 'Tasks',
          element: <TaskNavigation />,
          children: [
            {
              index:true,
              element: <Tasks/>,
              index: true,
              element: <Tasks />
            },
            {
              path: 'AddTask',
              element: <AddTask/>,
              element: <AddTask />,
            },
            {
              path:':taskId',
              element:<EditTask/>,
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
      {ui.isError && <ErrorPage error="Error occured" />}
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
