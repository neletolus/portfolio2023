import React from "react";
import Header from "./Header";
import styled from "styled-components";
import bgImg from "../images/bg.png";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Container>
      <div>
        <Header></Header>
      </div>
      <main>{props.children}</main>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: url(${bgImg});
`;

export default Layout;
