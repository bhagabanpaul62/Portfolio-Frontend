import { SplashCursor } from "./components/background/SplashCursor";
import { About } from "./components/homepage/about";
import { Header } from "./components/homepage/hedar";
import { LandingHero } from "./components/homepage/landing-hero";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <SplashCursor>
        <div className="relative z-10">
          <Header />
          <main className="relative">
            <LandingHero />
            <About />
          </main>
        </div>
      </SplashCursor>
    </div>
  );
}

export default App;
