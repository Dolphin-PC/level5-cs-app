import styled from "styled-components";

interface RowProps {
  $gap?: string;
  $wrap?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
`;
