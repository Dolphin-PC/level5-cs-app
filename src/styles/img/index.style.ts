import styled, { css } from "styled-components";

interface ProfileProps {
  $imgSrc?: string | null;
  $size?: "small" | "medium" | "large";
}
export const Profile = styled.img<ProfileProps>`
  border-radius: 50%;

  ${({ $size = "small" }) => {
    switch ($size) {
      case "small":
        return smallStyle;
      case "medium":
        return mediumStyle;
      case "large":
        return largeStyle;
    }
  }}

  ${({ $imgSrc }) => `
    background-image: url(${$imgSrc || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"});
    background-size: cover;
  `}
`;

const smallStyle = css`
  width: 30px;
  height: 30px;
`;

const mediumStyle = css`
  width: 50px;
  height: 50px;
`;

const largeStyle = css`
  width: 100px;
  height: 100px;
`;
