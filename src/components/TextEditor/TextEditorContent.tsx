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
  height: calc(100% - 42px);
  padding: 10px;
  overflow-y: scroll;
  p {
    font-size: 16px;
  }

  ul {
    list-style: square;
    padding-left: 1em;
    ul {
      list-style: inside;
    }
  }

  p + h3,
  ul + h3 {
    margin-top: 1em;
  }
`;

export default TextEditorContent;
