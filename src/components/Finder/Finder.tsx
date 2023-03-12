import React from "react";
import styled from "styled-components";
import WindowHeader from "../WindowParts/WindowHeader";
import FinderContent from "./FinderContent";

const Finder = () => {
  return (
    <Window>
      <WindowHeader>Information</WindowHeader>
      <FinderContent></FinderContent>
    </Window>
  );
};

const Window = styled.div`
  position: absolute;
  display: block;
  background: #fff;
  top: 144px;
  left: 144px;
  width: 1000px;
  height: 600px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
`;

export default Finder;
