import styled from "styled-components";
import logoImg from "../images/banana.png";

const Header = () => {
  return (
    <FixedHeader>
      <HeaderInner>
        <Logo src={logoImg}></Logo>
        <HeaderTitle>Thank you for visiting my portfolio</HeaderTitle>
      </HeaderInner>
    </FixedHeader>
  );
};

const FixedHeader = styled.header`
  position: fixed;
  background: #000;
  width: 100%;
  height: 36px;
`;

const HeaderInner = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #000;
  border-radius 14px 14px 0 0;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  padding-left: 44px;
`;

const Logo = styled.img`
  width: 22px;
  height: 19px;
`;

const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  letter-spacing: 0.05em;
`;

export default Header;
