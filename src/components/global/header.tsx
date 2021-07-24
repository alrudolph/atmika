import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

import NavBar from "./navBar";
import Colors from "../../theme/colors";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const HeadShot = styled.div`
  float: left;
  position: absolute;
  z-index: 1000;
  left: 0px;
  top: 0px;
`;
const Name = styled.h1`
  color: ${Colors.textTitle};
  // font-weight: 100;
  font-size: 32pt;
  margin-top: 0;
`;

export default function Header() {
  return (
    <Container>
      <StaticImage
        src="../../theme/background.jpeg"
        alt=""
        layout="fullWidth"
      />
      {/* <StaticImage src="../../theme/headshot.png" alt="" height={300} /> */}
      <NavBar />
    </Container>
  );
}
