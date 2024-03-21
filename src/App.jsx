import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage.jsx";
import { CreateProfilePage } from "./pages/create-profile/CreateProfilePage.jsx";
import { ProfilePreviewPage } from "./pages/profile-preview/ProfilePreviewPage.jsx";
import { LoginPage } from "./pages/login/LoginPage.jsx";
import { Error } from "./pages/error/Error.jsx";

function App() {
  return (
    <div id="app" data-theme="light">
      <Routes>
        <Route path="/your-profile-react/" element={<HomePage />} />
        <Route path="/your-profile-react/login" element={<LoginPage />} />
        <Route
          path="/your-profile-react/create-profile"
          element={<CreateProfilePage />}
        />
        <Route
          path="/your-profile-react/profile-preview"
          element={<ProfilePreviewPage />}
        />
        <Route path="your-profile-react/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
