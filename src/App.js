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
import Dashboard from './Components/Pagination2/Dashboard';
import LiveChat from './Components/LiveChat/LiveChat';
import SearchBar from './Components/SearchBar/SearchBar';
import Test from './Components/learnersbucket/Toggle/Test';
import ScrollIndicator from './Components/learnersbucket/ScrollIndicator/ScrollIndicator';
import AccordionTest from './Components/learnersbucket/Accordian/AccordianTest';
import CShapeRender from './Components/learnersbucket/CshapeRender/CShapeRender';
import ModalTest from './Components/learnersbucket/Modal/ModalTest';
import { element } from 'prop-types';
import TicTacToe from './Components/TicTacToe/Main';
import DarkLight from './Components/darkLight/DarkLight';
import { ThemeProvider } from './Components/darkLight/useThemept';
import CustomUseEffect from './Components/CustomUseEffect/CustomUseEffect';
import CustomUseMemo from './Components/CustomUseMemo/CustomeUseMemo';

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
   },
   {
    path:'/pagination-namaste-dev',
    element:<Dashboard/>,
    name: "Namaste Pagination"
   },
   {
    path: '/LiveChat',
    element: <LiveChat/>,
    name : "Youtube Live Chat"
   },
   {
    path: '/SearchBar',
    element: <SearchBar/>,
    name : "Googe Search Bar"
   },
   {
    path:'/toggle',
    element: <Test/>,
    name: "learners bucket toggle"
   },
   {
    path:'/scrollIndicator',
    element: <ScrollIndicator/>,
    name: "learners scroll indicator"
   },
   {
    path:'/accordian-learnerbucker',
    element: <AccordionTest/>,
    name: "learners Accordian"
   },
   {
    path:"/cshape",
    element: <CShapeRender/>,
    name: "C shape learners bucket"
   },
      {
    path:"/Modal",
    element: <ModalTest/>,
    name: "learners bucket Modal"
   },

   {
    path:"/ticTacToe",
    element: <TicTacToe/>,
    name: "Tic Tac Toe"
   },
   {
    path:"/darkLight",
    element: <ThemeProvider><DarkLight/></ThemeProvider>,
    name: "Dark Light"
   },
   {
    path:"/customuseEffect",
    element: <CustomUseEffect/>,
    name: "Custom useEffect"
   },
   {
    path:"/customuseMemo",
    element: <CustomUseMemo/>,
    name: "Custom useMemo"
   }

];
const app = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={app}/>
  );
}

export default App;
