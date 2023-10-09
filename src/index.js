import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import Rental from "./components/Rental";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<App>
				<Home />
			</App>
		),
		errorElement: (
			<App>
				<ErrorPage />
			</App>
		),
	},
	{
		path: "/a-propos",
		element: (
			<App>
				<AboutUs />
			</App>
		),
		errorElement: (
			<App>
				<ErrorPage />
			</App>
		),
	},
	{
		path: "/logement/:id",
		element: (
			<App>
				<Rental />
			</App>
		),
		errorElement: (
			<App>
				<ErrorPage />
			</App>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
