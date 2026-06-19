import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./components/contact/contact.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import User from "./components/user/User.jsx";
import Github from "./components/Github/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="user/" element={<User />}>
          <Route path=':userid' element={<User/>}></Route>
      </Route>
      <Route path="contact" element={<Contact />}/>
      <Route path="github/" element={<Github/>}>
        <Route path=":userid" element={<Github/>}/>
      </Route>
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
