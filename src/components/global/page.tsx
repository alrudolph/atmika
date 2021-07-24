import React from "react";

import styled, { createGlobalStyle } from "styled-components";

import Header from "./header";

import Colors from "../../theme/colors";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Georgia, serif;
    }
`;

interface Props {
  children: JSX.Element;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
`;

const ContentCenter = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 800px;
`;

export default function Page({ children }: Props) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <ContentCenter>
        <Content>{children}</Content>
      </ContentCenter>
    </Container>
  );
}
