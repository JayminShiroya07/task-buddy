import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainNavigation from './components/MainNavigation'
import NotFound from './components/NotFound'
import Tasks from './components/Tasks'
import EditTask from './components/EditTask'
import TaskNavigation from './components/TaskNavigation'
import AddTask from './components/AddTask'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainNavigation/>,
      errorElement: <NotFound/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path:'Tasks',
          element: <TaskNavigation/>,
          children: [
            {
              index:true,
              element: <Tasks/>
            },
            {
              path: 'AddTask',
              element: <AddTask/>
            },
            {
              path:':taskId',
              element:<EditTask/>
            }
          ]
        },
        
      ]
    }
  ])

  return ( <RouterProvider router={router}></RouterProvider> )
}

export default App
