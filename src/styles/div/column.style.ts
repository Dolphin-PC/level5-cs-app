import styled from "styled-components";

interface Props {
  $gap?: string;
  $wrap?: boolean;
}

export const Column = styled.div<Props>`
  display: flex;
  flex-direction: column;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
`;
