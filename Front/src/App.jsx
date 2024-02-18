import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='bg-black text-white'>Home</div>,
  }
])
function App() {

  return (
    <>
    <RouterProvider  router={router} />
    </>
  )
}

export default App
