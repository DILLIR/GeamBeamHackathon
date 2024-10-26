import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadFilePage } from "./pages/uploadFile";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadFilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
