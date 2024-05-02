import "./Footer.css";
import { Paragraph } from "./Paragraph";

export const Footer = () => {
  return (
    <footer>
      <Paragraph
        className={"textFooter"}
        text={"© 2024 Creado por Evelyn D.B. Todos los derechos reservados"}
      />
    </footer>
  );
};
