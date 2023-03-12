import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const TextEditorContent = (props: Props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px;
`;

export default TextEditorContent;
