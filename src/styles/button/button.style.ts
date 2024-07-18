import styled, { css } from "styled-components";

interface Props {
  $color?: "primary" | "secondary";
  $fullWidth?: boolean;
  $size?: "small" | "medium" | "large";
}

const defaultButtonStyle = css`
  border: none;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-family: "Do Hyeon", sans-serif;
`;

export const Button = styled.button<Props>`
  ${defaultButtonStyle}
  padding: 15px 32px;

  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  ${({ $color = "primary" }) => ($color === "primary" ? primaryStyle : secondaryStyle)}

  ${({ $size = "medium" }) => {
    switch ($size) {
      case "small":
        return css`
          font-size: small;
        `;
      case "medium":
        return css`
          font-size: medium;
        `;
      case "large":
        return css`
          font-size: large;
        `;
    }
  }}
`;

export const IconButton = styled.button`
  ${defaultButtonStyle}
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleButton = styled.button<Props>`
  ${defaultButtonStyle}
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: large;

  ${({ $color = "primary" }) => ($color === "primary" ? primaryStyle : secondaryStyle)};
`;

interface ProfileButtonProps {
  $imgSrc: string | null;
}
export const ProfileButton = styled.button<ProfileButtonProps>`
  ${defaultButtonStyle}
  ${({ $imgSrc }) => `
    background-image: url(${$imgSrc || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"});
    background-size: cover;
  `}
  
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const primaryStyle = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const secondaryStyle = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
