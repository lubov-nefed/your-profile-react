import "./Container.css";
function Container({ children, className }) {
  return <div className={className + " container"}>{children}</div>;
}

export { Container };
