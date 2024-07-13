import styled, { css } from "styled-components";

interface Props {
  $color?: "primary" | "secondary";
  $fullWidth?: boolean;
}
export const Button = styled.button<Props>`
  border: none;
  border-radius: 10px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-family: 'Do Hyeon', sans-serif;

  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  ${({ $color = "primary" }) =>
    $color === "primary" ? primaryStyle : secondaryStyle}
`;

const primaryStyle = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const secondaryStyle = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
