import { SplashCursor } from "./components/background/SplashCursor";
import { About } from "./components/homepage/about";
import { Header } from "./components/homepage/hedar";
import { LandingHero } from "./components/homepage/landing-hero";
import { TechnicalExpertise } from "./components/homepage/technical-expertise";
import { Footer } from "./components/homepage/footer";

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
            <TechnicalExpertise />
            <Footer></Footer>
          </main>
        </div>
      </SplashCursor>
    </div>
  );
}

export default App;
