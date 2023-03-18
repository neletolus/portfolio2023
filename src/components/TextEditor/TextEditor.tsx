import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WindowHeader from "../WindowParts/WindowHeader";
import TextEditorContent from "./TextEditorContent";
import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";

interface Props {
  name: String;
  content: URL;
}

const TextEditor = (props: Props) => {
  const [terms, setTerms] = useState("");

  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    fetch(props.content)
      .then((response) => response.text())
      .then((text) => {
        setTerms(text);
      });
  }, []);

  if (isDesktop) {
    return (
      <Window>
        <WindowHeader title={props.name}></WindowHeader>
        <TextEditorContent>
          <ReactMarkdown>{terms}</ReactMarkdown>
        </TextEditorContent>
      </Window>
    );
  } else {
    return (
      <WindowMobile>
        <WindowHeader title={props.name}></WindowHeader>
        <TextEditorContent>
          <ReactMarkdown>{terms}</ReactMarkdown>
        </TextEditorContent>
      </WindowMobile>
    );
  }
};

const Window = styled.div`
  position: absolute;
  display: block;
  background: #fff;
  top: 5%;
  left: 15%;
  width: 600px;
  height: 85%;
  max-height: 800px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  z-index: 3;
`;

const WindowMobile = styled.div`
  position: absolute;
  display: block;
  background: #fff;
  top: 42px;
  left: 0;
  width: calc(100% - 4px);
  height: 90%;
  max-height: 800px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  z-index: 3;
`;

export default TextEditor;
