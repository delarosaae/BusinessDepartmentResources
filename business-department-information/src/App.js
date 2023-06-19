import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Department from "./Pages/Department";



const router = createBrowserRouter([
  {   path: '/',
    element: <Root/>,
    children: [
      {path: '/Home', element: <Home/>},
        {path: '/Department', element: <Department/>},
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
