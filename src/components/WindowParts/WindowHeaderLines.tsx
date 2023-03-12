import React from "react";
import styled from "styled-components";

const FinderHeaderLines = () => {
  return (
    <Container>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 6px 2px;
`;

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: #000;
  & + & {
    margin-top: 3px;
  }
`;

export default FinderHeaderLines;
