import styled from "styled-components";

interface Props {
  $gap?: number;
  $wrap?: boolean;
}

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ $gap }) => $gap && `gap: ${$gap}px;`};
`;
