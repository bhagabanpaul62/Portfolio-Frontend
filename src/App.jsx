import { SplashCursor } from "./components/background/SplashCursor";
import { Heder } from "./components/homepage/Heder";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <SplashCursor>
        <Heder />
      </SplashCursor>
    </div>
  );
}

export default App;
