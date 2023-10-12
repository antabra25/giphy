
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

function LayOut({ children }: Props) {
  return (
    <div>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

export default LayOut;
