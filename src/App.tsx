import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./config/Provider";
import GlobalStyle from "./styles/globalStyle.style";
import Header from "./components/molecules/Header";

import MainPage from "./pages/MainPage";
import CardNewPage from "./pages/CardNewPage";
import CardDetailPage from "./pages/CardDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/templates/PrivateRoute";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/card" element={<CardNewPage />} />
          <Route path="/card/:id" element={<CardDetailPage />} />
          <Route element={<PrivateRoute isAuth={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute isAuth={true} />}>
            <Route path="/my" element={<MyPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
