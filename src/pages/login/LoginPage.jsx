import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Form } from "../../components/Form/Form.jsx";

function LoginPage({ SwitchTheme }) {
  return (
    <>
      <Header SwitchTheme={SwitchTheme} />
      <Main>
        <Form className="login-form" />
      </Main>
      <Footer />
    </>
  );
}
export { LoginPage };
