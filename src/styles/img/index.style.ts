import styled from "styled-components";

interface ProfileProps {
  $imgSrc?: string | null;
}
export const Profile = styled.img<ProfileProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  ${({ $imgSrc }) => `
    background-image: url(${$imgSrc || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"});
    background-size: cover;
  `}
`;
