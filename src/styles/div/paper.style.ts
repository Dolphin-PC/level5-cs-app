import styled from "styled-components";

interface Props {
  $width?: string;
}

export const Paper = styled.main<Props>`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  ${({ $width }) => $width && `width: ${$width};`}
`;
