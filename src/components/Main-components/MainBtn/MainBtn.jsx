//import "./MainBtn.css";

function MainBtn({ children, btnCssStyle, path }) {
  return (
    <a className={btnCssStyle + "main__btn btn create-btn"} href={path}>
      {children}
    </a>
  );
}

export { MainBtn };
