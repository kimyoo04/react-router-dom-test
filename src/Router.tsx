import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import MobileSignUp from "./mobile/SignUp";
import MobileSignIn from "./mobile/SignIn";
import { useEffect, useState } from "react";

export default function Router() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 창 크기가 변경될 때 isMobile 상태를 업데이트합니다.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopRoutes = [
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    }]

  const mobileRoutes = [
    {
      path: "/signin",
      element: <MobileSignIn />,
    },
    {
      path: "/signup",
      element: <MobileSignUp />,
    }]

  const routes = isMobile ? mobileRoutes : desktopRoutes;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    ...routes,
  ]);

  return <RouterProvider router={router} />;
}
