import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
