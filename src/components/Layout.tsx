import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import bgImg from "../images/bg.png";
import Aside from "./Aside";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Container>
      <Header></Header>
      <main>{props.children}</main>
      <Aside></Aside>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: url(${bgImg});
`;

export default Layout;
