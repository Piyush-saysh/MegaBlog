import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout , Login} from './components/index.js'

import Signup from './pages/Signup.jsx'
import AllPost from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import MyPost from './pages/MyPost.jsx'

const rounter = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path: '/',
        element:<Home/>

      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication = {false}>

            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication = {false}>

            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication >
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <AuthLayout authentication  >
            {" "}
            <Post />
          </AuthLayout>
        )
      },
      {
        path: '/my-post',
        element: (
          <AuthLayout authentication  >
            {" "}
            <MyPost />
          </AuthLayout>
        )
      },
    ],
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={rounter} />
    </Provider>
  </StrictMode>,
)
