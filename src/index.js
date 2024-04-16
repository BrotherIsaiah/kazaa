import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Root from "./routes/root";
import AboutPage from "./routes/about";
import ErrorPage from "./routes/error-page";
import TheCards from "./Components/Cards";
import "./routes/logements.json"
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import LocationPage from "./routes/location";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "location/:id",
    element: <LocationPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
