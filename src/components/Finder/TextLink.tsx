import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noteImg from "../../images/note.png";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

const TextLink = (props: Props) => {
  const link = `/${props.children}`;

  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
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
  } else {
    return (
      <>
        <TextLinkContentMobile>
          <Link to={link}>
            <img src={noteImg} />
            <p>{props.children}</p>
          </Link>
        </TextLinkContentMobile>
      </>
    );
  }
};

const TextLinkContent = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 60px;

  a {
    text-decoration: none;
    color: #000;
    position: relative;
    display: block;
    width: 110px;
  }

  img {
    width: auto;
    height: 70px;
    margin: auto;
  }

  p {
    line-height: 1;
    font-size: 16px;
    text-align: center;
  }
  & + & {
    margin-left: 45px;
  }
`;

const TextLinkContentMobile = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: #000;
    position: relative;
    display: block;
    width: 110px;
  }

  img {
    width: auto;
    height: 70px;
    margin: auto;
  }

  p {
    line-height: 1;
    font-size: 16px;
    text-align: center;
  }
  & + & {
    margin-left: 10px;
  }
`;

export default TextLink;
