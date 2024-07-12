import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CardNewPage from "./pages/CardNewPage";
import CardDetailPage from "./pages/CardDetailPage";
import GlobalStyle from "./styles/globalStyle.style";
import Provider from "./config/Provider";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/card" element={<CardNewPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
