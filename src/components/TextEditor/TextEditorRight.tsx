import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WindowHeader from "../WindowParts/WindowHeader";
import TextEditorContent from "./TextEditorContent";
import ReactMarkdown from "react-markdown";

interface Props {
  name: String;
  content: URL;
}

const TextEditorRight = (props: Props) => {
  const [terms, setTerms] = useState("");
  useEffect(() => {
    fetch(props.content)
      .then((response) => response.text())
      .then((text) => {
        setTerms(text);
      });
  }, []);

  return (
    <Window>
      <WindowHeader title={props.name}></WindowHeader>
      <TextEditorContent>
        <ReactMarkdown>{terms}</ReactMarkdown>
      </TextEditorContent>
    </Window>
  );
};

const Window = styled.div`
  position: absolute;
  display: block;
  background: #fff;
  top: 100px;
  right: 200px;
  width: 600px;
  height: 800px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
`;

export default TextEditorRight;
