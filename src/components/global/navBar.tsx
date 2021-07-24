import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Colors from "../../theme/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${Colors.navBar};
`;

const Bar = styled.div`
  width: 800px;
  display: flex;
  justify-content: flex-end;
`;

const titles = ["Daily Nexus", "Santa Barbara Independent", "Oak Park Talon"];

const Cell = styled.div<{ right: boolean }>`
  background-color: ${Colors.navBar};
  text-align: center;
  border: 1px solid #adadad;
  border-top: none;
  border-bottom: none;
  font-size: 14pt;
  ${({ right }) => (right ? "" : "border-right: none;")}
  padding: 10px;

  &:hover {
    cursor: pointer;
  }

  & > * {
    text-decoration: none;
    color: black;
  }
`;

export default function NavBar() {
  return (
    <Container>
      <Bar>
        {titles.map((title, i) => {
          return (
            <Cell right={i === titles.length - 1}>
              <Link to="">{title}</Link>
            </Cell>
          );
        })}
      </Bar>
    </Container>
  );
}
