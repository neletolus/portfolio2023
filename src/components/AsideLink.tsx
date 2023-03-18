import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dan from "../images/dan.png";
import ten from "../images/ten.png";
import trash from "../images/trash.png";

interface Props {
  children: React.ReactNode;
}

const AsideLink = (props: Props) => {
  const link = `/${props.children}`;
  let imageSrc;
  let trashFlg = false;
  switch (props.children) {
    case "dan":
      imageSrc = dan;
      break;
    case "ten":
      imageSrc = ten;
      break;
    case "Exit Site":
      imageSrc = trash;
      trashFlg = true;
      break;
    default:
      break;
  }

  if (trashFlg) {
    return (
      <>
        <AsideLinkContent>
          <a href="https://rogule.com/game.html">
            <img src={imageSrc} />
            <p>{props.children}</p>
          </a>
        </AsideLinkContent>
      </>
    );
  } else {
    return (
      <>
        <AsideLinkContent>
          <Link to={link}>
            <img src={imageSrc} />
            <p>{props.children}</p>
          </Link>
        </AsideLinkContent>
      </>
    );
  }
};

const AsideLinkContent = styled.div`
  position: relative;
  display: block;
  margin-top: 100px;
  width: 85px;

  a {
    text-decoration: none;
    color: #000;
    position: relative;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  img {
    width: auto;
    height: 64px;
    margin: auto;
  }

  p {
    font-size: 16px;
    text-align: center;
    background: #fff;
    display: inline-block;
    padding: 0 5px;
  }
  & + & {
    margin-top: 50px;
  }
`;

export default AsideLink;
