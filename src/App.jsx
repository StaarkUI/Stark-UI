import React, { Component } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import RootLayout from "./Layouts/RootLayout";
import ComponentsLayout from "./Layouts/ComponentsLayout";
import UiNavbar from "./UIcomponents/UiAlert";
import UiAuthentication from "./UIcomponents/UiAuthentication";
import UiButton from "./UIcomponents/UiButton";
import UiAvatar from "./UIcomponents/UiAvatar";
import UiCalendar from "./UIcomponents/UiCalendar";
import UiCard from "./UIcomponents/UiCard";
import UiCarousel from "./UIcomponents/UiCarousel";
import UiDataTable from "./UIcomponents/UiDataTable";
import UiDatePicker from "./UIcomponents/UiDatePicker";
import UiDropDown from "./UIcomponents/UiDropDown";
import UiInput from "./UIcomponents/UiInput";
import UiInputOTP from "./UIcomponents/UiInputOTP";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="component" element={<ComponentsLayout />}>
          <Route path="uialert" element={<UiNavbar />} />
          <Route path="uiAuthentication" element={<UiAuthentication />} />
          <Route path="uiAvatar" element={<UiAvatar />} />
          <Route path="Uibutton" element={<UiButton />} />
          <Route path="uicard" element={<UiCard />} />
          <Route path="uicarousel" element={<UiCarousel />} />
          <Route path="uicalendar" element={<UiCalendar />} />
          <Route path="uidatatable" element={<UiDataTable />} />
          <Route path="uidatepicker" element={<UiDatePicker />} />
          <Route path="uidropdown" element={<UiDropDown />} />
          <Route path="uiinput" element={<UiInput />} />
          <Route path="uiinputotp" element={<UiInputOTP />} />
          

        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
