import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "@/context/GameContext";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Landing from "@/pages/Landing";
import Journey from "@/pages/Journey";
import LevelPlay from "@/pages/LevelPlay";
import Wishlist from "@/pages/Wishlist";
import Pitch from "@/pages/Pitch";
import DesignPromptDoc from "@/pages/DesignPromptDoc";
import Results from "@/pages/Results";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
          <Toaster position="top-center" richColors />
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/level/:id" element={<LevelPlay />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/design-prompt" element={<DesignPromptDoc />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
