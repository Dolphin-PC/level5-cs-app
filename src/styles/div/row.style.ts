import styled from "styled-components";

interface RowProps {
  $gap?: number;
  $wrap?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;

  ${({ $gap }) => $gap && `gap: ${$gap}px;`}
  ${({ $wrap }) => $wrap && `flex-wrap: wrap;`}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* 기본 설정: 가능한 많은 열 */
  gap: 50px; /* 카드 사이의 간격 */

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 767px 이하일 때 2열 */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 화면이 768px 이상 1023px 이하일 때 4열 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr); /* 화면이 1024px 이상일 때 6열 */
  }
`;
