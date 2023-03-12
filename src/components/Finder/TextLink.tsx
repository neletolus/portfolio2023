import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noteImg from "../../images/note.png";

interface Props {
  children: React.ReactNode;
}

const TextLink = (props: Props) => {
  const link = `/${props.children}`;

  return (
    <>
      <TextLinkContent>
        <Link to={link}>
          <img src={noteImg} />
          <p>{props.children}</p>
        </Link>
      </TextLinkContent>
    </>
  );
};

const TextLinkContent = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 45px;

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width: auto;
    height: 70px;
    margin: auto;
  }

  p {
    line-height: 1;
    font-size: 16px;
  }
  & + & {
    margin-left: 45px;
  }
`;

export default TextLink;
