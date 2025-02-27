import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import MainNavigation from './components/MainNavigation'
import NotFound from './components/NotFound'
import Tasks from './components/Tasks'

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
          element: <Tasks/>
        }
      ]
    }
  ])

  return ( <RouterProvider router={router}></RouterProvider> )
}

export default App
