import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Department from "./Pages/Department";
import Employees from "./Pages/Employees";
import Resources from "./Pages/Resources";



const router = createBrowserRouter([
  {   path: '/',
    element: <Root/>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/Department', element: <Department/>},
        {path: '/Employees', element: <Employees/>},
        {path: '/Resources', element: <Resources/>},
    ]
  },
]);


function App() {
  return (
      <div className=".windowSize">
        <RouterProvider router={router}>
        </RouterProvider>
      </div>
  );
}

export default App;
