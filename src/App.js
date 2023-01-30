import HelloWorld from "./pages/hello-world";
import ImageCarousel from "./pages/image-carousel";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />}>
          <Route path="image-carousel" element={<ImageCarousel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
