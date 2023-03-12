import React from "react";
import styled from "styled-components";
import WindowCloseButton from "./WindowCloseButton";
import WindowHeaderLines from "./WindowHeaderLines";

interface Props {
  title: String;
}

const WindowHeader = (props: Props) => {
  return (
    <Container>
      <WindowHeaderLines></WindowHeaderLines>
      <WindowCloseButtonWrapper>
        <WindowCloseButton isClosable={true}></WindowCloseButton>
      </WindowCloseButtonWrapper>
      <WindowTitle>{props.title}</WindowTitle>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-bottom: 2px solid #000000;
  display: flex;
  justify-content: center;
`;

const WindowCloseButtonWrapper = styled.div`
  position: absolute;
  width: 35px;
  height: 27px;
  top: 6px;
  left: 20px;
  background: #fff;
  padding: 0 4px;
`;

const WindowTitle = styled.h2`
  position: absolute;
  background: #fff;
  padding: 0 4px;
  font-size: 20px;
  display: inline-block;
  top: 5px;
  letter-spacing: 0.1em;
  font-weight: 400;
`;

export default WindowHeader;
