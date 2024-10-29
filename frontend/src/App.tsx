import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadFilePage } from "./pages/uploadFile";
import { MainPage } from "./pages/mainPage";
import { ChatPage } from "./pages/chatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadFilePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
