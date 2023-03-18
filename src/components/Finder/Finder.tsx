import React from "react";
import styled from "styled-components";
import WindowHeader from "../WindowParts/WindowHeader";
import FinderContent from "./FinderContent";
import { useMediaQuery } from "react-responsive";

const Finder = () => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <Window>
        <WindowHeader title={"Information"}></WindowHeader>
        <FinderContent></FinderContent>
      </Window>
    );
  } else {
    return (
      <WindowMobile>
        <WindowHeader title={"Information"}></WindowHeader>
        <FinderContent></FinderContent>
      </WindowMobile>
    );
  }
};

const Window = styled.div`
  position: absolute;
  display: block;
  background: #fff;
  top: 10%;
  left: 10%;
  width: 60%;
  max-width: 1000px;
  height: 100%;
  max-height: 600px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  z-index: 2;
`;

const WindowMobile = styled.div`
  position: relative;
  display: block;
  background: #fff;
  width: calc(100% - 4px);
  height: auto;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  z-index: 2;
`;

export default Finder;
