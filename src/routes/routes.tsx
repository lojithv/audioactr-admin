import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RedirectHandler from "./RedirectHandler";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Subscriptions from "../pages/Subscriptions";
import Customers from "../pages/Customers";
import SubscriptionPlans from "../pages/SubscriptionPlans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectHandler />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute user={false}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children:[
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "subscription-plans",
        element: <SubscriptionPlans />,
      },
    ]
  },
]);
