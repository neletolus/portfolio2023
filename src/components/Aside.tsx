import styled from "styled-components";
import AsideLink from "./AsideLink";

const Aside = () => {
  return (
    <AsideContainer>
      <AsideTop>
        <AsideLink>dan</AsideLink>
        <AsideLink>ten</AsideLink>
      </AsideTop>
      <AsideBottom>
        <AsideLink>Exit Site</AsideLink>
      </AsideBottom>
    </AsideContainer>
  );
};

const AsideContainer = styled.aside`
  position: absolute;
  display: block;
  width: 150px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1;
`;

const AsideTop = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
`;

const AsideBottom = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  bottom: 80px;
`;

export default Aside;
