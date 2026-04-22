import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient= new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ToastContainer />
    <RouterProvider router={router} />
    </QueryClientProvider>
   
    </>
  );
}

export default App;
