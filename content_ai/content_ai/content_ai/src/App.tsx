import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/LandingPage";
import Generate from "./pages/IdeaGeneratorPage";
import Ideas from "./pages/IdeasDisplayPage";
import Calendar from "./pages/ContentCalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
