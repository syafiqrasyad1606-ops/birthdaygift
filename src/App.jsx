import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "./context/ProgressContext";

import MusicPlayer from "./components/MusicPlayer";

import IntroScreen from "./pages/IntroScreen";
import Home from "./pages/Home";
import GiftMenu from "./pages/GiftMenu";
import MemorySky from "./pages/MemorySky";
import Gallery from "./pages/Gallery";
import Music from "./pages/Music";
import FinalGift from "./pages/FinalGift";

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <MusicPlayer />

        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/gift" element={<Home />} />
          <Route path="/menu" element={<GiftMenu />} />
          <Route path="/memory" element={<MemorySky />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/final" element={<FinalGift />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;