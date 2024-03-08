import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CreateProfilePage } from "./pages/create-profile/CreateProfilePage.jsx";
import { ProfilePreviewPage } from "./pages/profile-preview/ProfilePreviewPage.jsx";
import { LoginPage } from "./pages/login/LoginPage.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={HomePage} />
      <Route path="/login" element={LoginPage} />
      <Route path="/create-profile" element={CreateProfilePage} />
      <Route path="/profile-preview" element={ProfilePreviewPage} />
    </Routes>
  );
}

export default App;
