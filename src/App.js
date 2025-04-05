import './App.css';
import FileExplorerBody from './Components/FileExplorerBody';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MachineCoding from './Components/MachineCoding';
import Pagination from './Components/Pagination/Pagination';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import LruCache from './Components/LruCache/LruCache';
import ThemeToggle from "./Components/ThemeToggle";

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
  },
  {
    path:'/Progress',
    element:<ProgressBar/>
  },
  {
    path:'/LruCache',
    element: <LruCache/>
  },
  {
    path: '/selfThemeToggler',
    element: <ThemeToggle/>
  }

])

function App() {
  return (
    <RouterProvider router={app}/>
  );
}

export default App;
