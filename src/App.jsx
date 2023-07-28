import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToDoContextProvider } from "./store";

import MainPage from "./pages/Main";
import HistoryPage from "./pages/History";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "history",
    element: <HistoryPage />,
  },
]);

function App() {
  return (
    <ToDoContextProvider>
      <RouterProvider router={router} />
    </ToDoContextProvider>
  );
}

export default App;
