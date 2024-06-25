import './App.css';
import FileExplorerBody from './Components/FileExplorerBody';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MachineCoding from './Components/MachineCoding';
import Pagination from './Components/Pagination/Pagination';

const app = createBrowserRouter([
  {
    path:'/',
    element: <MachineCoding/>,
  },
  {
    path:'/file-explorer',
    element: <FileExplorerBody/>
  },
  {
    path:'/Pagination',
    element:<Pagination/>
  }

])

function App() {
  return (
    <RouterProvider router={app}/>
  );
}

export default App;
