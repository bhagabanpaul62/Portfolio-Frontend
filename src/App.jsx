import { SplashCursor } from "./components/background/SplashCursor";
import { About } from "./components/homepage/about";
import { Header } from "./components/homepage/hedar";
import { LandingHero } from "./components/homepage/landing-hero";

import "./index.css";

function App() {
  return (
    <div className=" bg-black text-white">
      <SplashCursor>
        <Header></Header>
        <LandingHero></LandingHero>
        <About></About>
       
      </SplashCursor>
    </div>
  );
}

export default App;
