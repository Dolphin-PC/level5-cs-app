import styled from "styled-components";

export const Profile = styled.div<{ $imgSrc: string }>`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.$imgSrc});
  background-size: cover;
  background-position: center;
`;
