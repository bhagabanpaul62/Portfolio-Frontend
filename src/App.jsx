import { useEffect, useState } from "react";
import { SplashCursor } from "./components/background/SplashCursor";
import { Header } from "./components/heder/hedar";
import { Home } from "./components/homepage/home";
import { Footer } from "./components/footer/footer";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AboutMe } from "./components/aboutPage/aboutMe";
import { Services } from "./components/services/services";
import { Project } from "./components/Projects/project";
import { ProjectPage } from "./components/Projects/projectPage";
import { Contact } from "./components/Contact/contact";
import { PageNotFound } from "./components/pageNotFound/pageNotFound";
import { BookACall } from "./components/bookACalll/bookAcall";
import { ComingSoon } from "./components/pageNotFound/comingsoon";
import Dashboard from "./components/admin/dashbord-overview/dashbord";
import { Login } from "./components/admin/login/Login";
import EditProject from "./components/admin/projectManagement/editproject";
import { AllRouteLinks } from "./components/test/allRouteLink";
import UploadNewProject from "./components/admin/projectManagement/uploadNewProject";

const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const [isAuth, setIsAuth] = useState(true);

  // Load auth status from localStorage
  // useEffect(() => {
  //   const auth = localStorage.getItem("isAuth");
  //   setIsAuth(auth === "true");
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:id" element={<ProjectPage />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookacall" element={<BookACall />} />
          <Route path="comingsoon" element={<ComingSoon />} />
          <Route path="test" element={<AllRouteLinks />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={isAuth ? <Dashboard /> : <Login />} />
          <Route path="editproject" element={<EditProject />}></Route>
          <Route path="uploadproject" element={<UploadNewProject />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SplashCursor>
        <RouterProvider router={router} />
      </SplashCursor>
    </div>
  );
}

export default App;
