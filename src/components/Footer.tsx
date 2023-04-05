import styled from "styled-components";
import twitterImg from "../images/twitter.png";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <FooterContainer>
        <FooterTop>
          {/* <SnsLink href="https://twitter.com/dev_yohei" target="_blank">
            <SnsLogo src={twitterImg}></SnsLogo>
            <SnsText>Twitter</SnsText>
          </SnsLink> */}
        </FooterTop>
        <FooterBottom>
          <CopyRight>© 2023 YoheiSuda</CopyRight>
        </FooterBottom>
      </FooterContainer>
    );
  } else {
    return <></>;
  }
};

const FooterContainer = styled.footer`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
`;

const FooterTop = styled.div`
  position: relative;
  display: block;
`;

const SnsLogo = styled.img`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  margin: auto;
`;

const SnsText = styled.p`
  margin-top: 10px;
  position: relative;
  display: inline-block;
  background: #fff;
  font-size: 16px;
  color: #000;
  padding: 0 5px;
`;

const SnsLink = styled.a`
  position: relative;
  display: inline-block;
  left: 72px;
  text-decoration: none;
`;

const FooterBottom = styled.div`
  margin-top: 40px;
  text-align: center;
  background: #000;
`;

const CopyRight = styled.p`
  font-size: 12 px;
  color: #fff;
`;

export default Footer;
