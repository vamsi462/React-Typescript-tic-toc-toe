import styled from "styled-components";
import { Value } from "./GameState";

const StyledSquare = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #999;
  background: #fff;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export const Square = (props: SquareProps) => (
  <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>
);
