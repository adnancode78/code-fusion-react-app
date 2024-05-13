import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <h3>Hello worlfhgfhgfd!</h3>
        </div>
,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);