import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CreateProfilePage } from "./pages/create-profile/CreateProfilePage.jsx";
import { ProfilePreviewPage } from "./pages/profile-preview/ProfilePreviewPage.jsx";
import { LoginPage } from "./pages/login/LoginPage.jsx";
import { HomePage } from "./pages/homepage/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/your-profile-react/" element={<HomePage />} />
        <Route path="/your-profile-react/login" element={<LoginPage />} />
        <Route path="your-profile-react//create-profile" element={<CreateProfilePage />} />
        <Route path="your-profile-react//profile-preview" element={ <ProfilePreviewPage />} />
      </Routes>
    </>
  );
}

export default App;
