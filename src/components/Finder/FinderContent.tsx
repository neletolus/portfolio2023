import React, { Children } from "react";
import styled from "styled-components";
import TextLink from "./TextLink";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode;
}

const FinderContent = () => {
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <>
        <ContentHeaderWrapper>
          <ContentHeaderInformations>
            <ContentHeaderParagraph>5 items</ContentHeaderParagraph>
            <ContentHeaderParagraph>Something in disk</ContentHeaderParagraph>
            <ContentHeaderParagraph>All available</ContentHeaderParagraph>
          </ContentHeaderInformations>
        </ContentHeaderWrapper>
        <LinkWrapper>
          <TextLink>About Me</TextLink>
          <TextLink>Contact</TextLink>
        </LinkWrapper>
        <LinkWrapper>
          <TextLink>Works(Dev)</TextLink>
          <TextLink>Works(Music)</TextLink>
          <TextLink>Works(Illust)</TextLink>
        </LinkWrapper>
      </>
    );
  } else {
    return (
      <>
        <ContentHeaderWrapper>
          <ContentHeaderInformations>
            <ContentHeaderParagraph>5 items</ContentHeaderParagraph>
            <ContentHeaderParagraph>Something in disk</ContentHeaderParagraph>
            <ContentHeaderParagraph>All available</ContentHeaderParagraph>
          </ContentHeaderInformations>
        </ContentHeaderWrapper>
        <LinkWrapperMobile>
          <TextLink>About Me</TextLink>
          <TextLink>Contact</TextLink>
        </LinkWrapperMobile>
        <LinkWrapperMobile>
          <TextLink>Works(Dev)</TextLink>
          <TextLink>Works(Music)</TextLink>
          <TextLink>Works(Illust)</TextLink>
        </LinkWrapperMobile>
      </>
    );
  }
};

const ContentHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-bottom: 2px solid #000;
`;

const ContentHeaderInformations = styled.div`
  position: relative;
  width: 100%;
  height: 37px;
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  overflow-x: auto;
`;

const ContentHeaderParagraph = styled.p`
  font-size: 16px;
  padding: 0 0.5em;
  white-space: nowrap;
`;

const LinkWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding 0 45px;
`;

const LinkWrapperMobile = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding 0 10px;
`;

export default FinderContent;
