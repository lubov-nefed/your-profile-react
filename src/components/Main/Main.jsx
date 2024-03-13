/* import "./Main.css"; */
import { Container } from "../../components/Container/Container.jsx";
function Main({ children }) {
  return (
    <main className="main">
      <Container className={"main__container"}>{children}</Container>
    </main>
  );
}

export { Main };
