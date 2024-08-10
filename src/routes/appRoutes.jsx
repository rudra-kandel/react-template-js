import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRoutes } from "react-router-dom";
import { navigationRoutes } from "./routes-constants";
const Home = lazy(() => import("@pages/Home/home"));
const Logs = lazy(() => import("@pages/Home/logs"));
const Register = lazy(() => import("@pages/Auth/register"));
// import Login from "@pages/Auth/login";
//Lazy loading
const Login = lazy(() => import("@pages/Auth/login"));

//Common routes
const commonRoutes = [
  {
    path: navigationRoutes.base,
    element: <Home />,
  },
];

const openRoutes = [
  ...commonRoutes,
  {
    path: navigationRoutes.login,
    element: <Login />,
  },
  {
    path: navigationRoutes.signup,
    element: <Register />,
  },
  {
    path: "logs",
    element: <Logs />,
  },
];

const AppRoutes = () => {
  const element = useRoutes(openRoutes);
  return (
    <ErrorBoundary fallback={<>Error!</>}>
      <Suspense fallback={<>Loading..</>}>{element}</Suspense>
    </ErrorBoundary>
  );
};
export default AppRoutes;
