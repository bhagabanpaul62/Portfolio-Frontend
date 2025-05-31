import { SplashCursor } from "./components/background/SplashCursor";
import { Header } from "./components/heder/hedar";
import {Home} from "./components/homepage/home"
import { Footer } from "./components/footer/footer";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { About } from "./components/aboutPage/about";
import {Services} from "./components/services/services"
import { Project } from "./components/Projects/project";
import { Contact } from "./components/Contact/contact";
import { PageNotFound } from "./components/pageNotFound/pageNotFound";
import { BookACall } from "./components/bookACalll/bookAcall";

// Create a Layout component that includes Header and Footer
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route path="/home" element={<Home />}></Route> */}
      <Route index element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/bookacall" element={<BookACall/>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>

    </Route>
  )
);



function App() {


  return (
    <div className="min-h-screen bg-black text-white relative">
      <SplashCursor>
   
        <RouterProvider router={router}/>
    
      </SplashCursor>
    </div>
  );
}

export default App;
