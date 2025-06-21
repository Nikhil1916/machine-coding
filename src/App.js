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
import ImageSlider from './Components/ImageSlider/ImageSlider';
import Comments from './Components/RedditNestedComments/Comments';

export const routes = [
  {
    path:'/',
    element: <MachineCoding/>,
  },
  {
    path:'/file-explorer',
    element: <FileExplorerBody/>,
    name: "File Explorer"
  },
  {
    path:'/Pagination',
    element:<Pagination/>,
    name: "Pagination"
  },
  {
    path:'/Progress',
    element:<ProgressBar/>,
    name: "Progress"
  },
  {
    path:'/LruCache',
    element: <LruCache/>,
    name: "Lru Cache"
  },
  {
    path: '/selfThemeToggler',
    element: <ThemeToggle/>,
    name: "Theme Toggle"
  },
   {
    path: "/configUi",
    element: <ConfigUI/>,
    name: "Config Ui"
   },
   {
    path:"/InfiniteScroll",
    element: <InfiniteScroll/>,
    name: "Infinite Scroll"
   },
   {
    path: "/Accordian",
    element: <Accordian/>,
    name: "Accoridan"
   },
   {
    path:"/ImageSlider",
    element: <ImageSlider/>, 
    name: "Image Slider"
   },
   {
    path:"/NestedComments",
    element: <Comments/>,
    name: "Nested Comments"
   }

];
const app = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={app}/>
  );
}

export default App;
