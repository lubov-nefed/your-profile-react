import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "../../components/Main/Main.jsx";
import { Container } from "../../components/Container/Container.jsx";
function Error() {
  return (
    <>
      <Header />
      <Main>
        <Container className={"main__container"}>
          <p>404</p>
          <p>Page not found</p>
          <a href="/your-profile-react/">Return to homepage</a>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export { Error };
