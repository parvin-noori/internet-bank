import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { IdentityLayout } from "./layouts/identity-layout";
import { SignUp } from "./pages/signup";
import MainLayout from "./layouts/main-layout/MainLayout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        index: true,
      },
    ],
  },
  {
    element:<MainLayout/>,
    path:'/dashboard',
    children:[
      
    ]
  }
]);

export default router;
