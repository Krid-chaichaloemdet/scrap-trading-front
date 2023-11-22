import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import TestPage from '../pages/TestPage';
import HomePage from "../pages/HomePage";
// import ReadProductPage from "../pages/ReadProductPage";
import AdminModePage from "../pages/AdminModePage";
// import ProfilePage from "../pages/ProfilePage";
import Layout from "../layout/Layout";
import RedirectIfAuthenticated from "../features/RedirectIfAuthenticated";
import RedirectIfNotAuthenticated from "../features/RedirectIfNotAuthenticated";
import LoginFeat from "../features/LoginFeat";
// import Authenticated from "../features/Authenticated";
import RegisterFeat from "../features/RegisterFeat";

// import CreateOrderFeat from "../features/CreateOrderFeat";
import UserProfilePage from "../pages/userProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "register",
        element: (
          <RedirectIfAuthenticated>
            <RegisterFeat />
           </RedirectIfAuthenticated> 
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfAuthenticated>
            <LoginFeat />
          </RedirectIfAuthenticated> 
        ),
      },
    ],
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "adminMode",
        element: (
          <RedirectIfNotAuthenticated>
            <AdminModePage />

          </RedirectIfNotAuthenticated>

        ),
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "userProfilepage",
        element: (
          <RedirectIfNotAuthenticated >
            <UserProfilePage/>
          </RedirectIfNotAuthenticated >
        ),
        
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}

// {
//   path: "user/:userId",
//   element: (
//     // <Authenticated>
//       <ProfilePage />
//     // </Authenticated>
//   ),
// },
