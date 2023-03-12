import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  isClosable: Boolean;
}

const WindowCloseButton = (props: Props) => {
  return (
    <CloseButton>
      <Link to="/"></Link>
    </CloseButton>
  );
};

const CloseButton = styled.div`
  position: relative;
  display: block;
  width: 27px;
  height: 27px;
  border: 2px solid #000;
  background: #fff;

  a {
    position: relative;
    display: block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        transform: rotate(45deg);
        top: 10px;
        background: #000;
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        transform: rotate(-45deg);
        top: 10px;
        background: #000;
      }
    }
  }
`;

export default WindowCloseButton;
