import styled from "styled-components";

interface Props {
  $width: number;
  $height: number;
}

export const Gap = styled.div<Props>`
  ${({ $width, $height }) => ({
    width: $width,
    height: $height,
  })}
`;
