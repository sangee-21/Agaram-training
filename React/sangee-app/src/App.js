import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './header';
import { useState } from 'react';
import Todo from './Todo/Todo'
import Users from './Todo/list'
import Main from './Todo/main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Todo/>,
//   },
//   {
//     path: "/login",
//     element: <Users/>,
//   },
//   {
//     path:"/loginpg",
//     element:<Main/>
//   }
  // {
  //   path: "/link",
  //   element: <Header/>,
  // },

  
// ]);

function App() {
  let [islogin,setislogin]=useState({
    log:false,
    email:""
  })
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todo islogin={islogin} setislogin={setislogin}/>,
    },
    {
      path: "/login",
      element: <Users/>,
    },
    {
      path:"/loginpg",
      element:<Main islogin={islogin} setislogin={setislogin}/>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Main/> */}
    </div>
  
   
  );
}
export default App;

