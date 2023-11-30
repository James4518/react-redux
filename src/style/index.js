import styled from "styled-components";
import { primarySize } from "./variable";
export const AppWrapper = styled.div.attrs((props) => ({
  color: props.color || props.theme.color || "green",
}))`
  #container {
    display: flex;
    font-size: ${primarySize}px;
    div {
      flex: 1;
      border: 1px solid ${(props) => props.color};
    }
  }
`;
