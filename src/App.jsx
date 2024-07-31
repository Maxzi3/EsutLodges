import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LodgesPage from "./Pages/LodgesPage";
import TestimonialPage from "./Pages/TestimonialPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Lodges" element={<LodgesPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/Testimonial" element={<TestimonialPage/>}/>

    </Route>)
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
