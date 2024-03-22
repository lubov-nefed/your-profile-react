import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "../../components/Main/Main.jsx";
function Error({SwitchTheme}) {
  return (
    <>
      <Header SwitchTheme={SwitchTheme}/>
      <Main>
        <p>404</p>
        <p>Page not found</p>
        <a href="/your-profile-react/">Return to homepage</a>
      </Main>
      <Footer />
    </>
  );
}

export { Error };
