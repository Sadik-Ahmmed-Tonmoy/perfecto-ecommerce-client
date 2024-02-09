import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import "./scss/styles.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import LogicProvider from "./providers/LogicProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

axios.defaults.baseURL = "https://perfecto.fixican.com/api/";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <Provider store={store}>
                <LogicProvider>
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={router} />
                    </QueryClientProvider>
                </LogicProvider>
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);
