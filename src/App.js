import './App.css';
import FileExplorerBody from './Components/FileExplorerBody';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MachineCoding from './Components/MachineCoding';
import Pagination from './Components/Pagination/Pagination';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import LruCache from './Components/LruCache/LruCache';
import ThemeToggle from "./Components/ThemeToggle";
import { ConfigUI } from './Components/configDrivenUI/ConfigUi';
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';
import Accordian from './Components/Accordian/Accordian';

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
  },
   {
    path: "/configUi",
    element: <ConfigUI/>
   },
   {
    path:"/InfiniteScroll",
    element: <InfiniteScroll/>
   },
   {
    path: "/Accordian",
    element: <Accordian/>
   }

])

function App() {
  return (
    <RouterProvider router={app}/>
  );
}

export default App;
