import { SplashCursor } from "./components/background/SplashCursor";
import { LandingHero } from "./components/homepage/landing-hero";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-white text-white">
      <SplashCursor>
        <LandingHero></LandingHero>
      </SplashCursor>
    </div>
  );
}

export default App;
