import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage.jsx";
import { CreateProfilePage } from "./pages/create-profile/CreateProfilePage.jsx";
import { ProfilePreviewPage } from "./pages/profile-preview/ProfilePreviewPage.jsx";
import { LoginPage } from "./pages/login/LoginPage.jsx";
import { Error } from "./pages/error/Error.jsx";
import { ThemeContext } from "./ThemeContext.jsx";
import { useState, useContext, createContext } from "react";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');
  function SwitchTheme() {
    const newTheme = theme === 'light'? 'dark' :'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  return (
    <ThemeContext.Provider value={theme}>      
    <div id="app" data-theme={theme}>
      <Routes>
        <Route path="/your-profile-react/" element={<HomePage SwitchTheme={SwitchTheme}/>} />
        <Route path="/your-profile-react/login" element={<LoginPage SwitchTheme={SwitchTheme}/>} />
        <Route
          path="/your-profile-react/create-profile"
          element={<CreateProfilePage SwitchTheme={SwitchTheme}/>}
        />
        <Route
          path="/your-profile-react/profile-preview"
          element={<ProfilePreviewPage SwitchTheme={SwitchTheme}/>}
        />
        <Route path="your-profile-react/*" element={<Error SwitchTheme={SwitchTheme}/>} />
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
