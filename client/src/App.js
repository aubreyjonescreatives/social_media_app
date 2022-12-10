import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  Route, 
  Outlet,
} from 'react-router-dom'; 
import Landing from './pages/landing/Landing.js'; 
import CreateAccount from './pages/createaccount/CreateAccount.js';
import Login from './pages/login/Login.js';
import UserDashboard from './pages/userdashboard/UserDashboard.js';
import Profile from './pages/profile/Profile.js';

import Footer from './components/Footer.js'; 


const Layout = () => {
return (
  <>
   <Outlet/>
  <Footer />
  
  </>
)



}; 

const router = createBrowserRouter([

{
path: '/', 
element: <Layout />, 
children: [
{
  path: '/', 
  element: <Landing/>, 
}, 
{
  path: '/createaccount', 
  element: <CreateAccount/>, 
}, 
{
  path: '/login', 
  element: <Login/>, 
}, 
{
  path: '/userdashboard', 
  element: <UserDashboard/>, 
}, 
{
  path: '/profile', 
  element: <Profile/>, 
}, 



]





}])





function App() {
  return (
  <>
  <RouterProvider router={router}></RouterProvider>
  
  </>
  );
}

export default App;
