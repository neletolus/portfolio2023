import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import bgImg from "../images/bg.png";
import Aside from "./Aside";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <Container>
        <Header></Header>
        <main>{props.children}</main>
        <Aside></Aside>
        <Footer></Footer>
      </Container>
    );
  } else {
    return (
      <ContainerMobile>
        <Header></Header>
        <main>{props.children}</main>
        <Aside></Aside>
        <Footer></Footer>
      </ContainerMobile>
    );
  }
};

const Container = styled.div`
  min-height: 100vh;
  background: url(${bgImg});
`;

const ContainerMobile = styled.div`
  min-height: 100vh;
  background: url(${bgImg});
  main {
    padding-top: 42px;
  }
`;

export default Layout;
