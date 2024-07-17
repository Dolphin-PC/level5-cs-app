import styled from "styled-components";

interface Props {
  $gap?: number;
  $wrap?: boolean;
  $center?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`};
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`};
  ${({ $center }) =>
    $center && `justify-content: center; align-items: center;`};
`;
