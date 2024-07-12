import styled from "styled-components";

interface Props {
  $width?: number;
}

export const SearchInput = styled.input<Props>`
  border: none;
  border-radius: 80px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 16px;
  font-size: 16px;

  ${({ $width }) => {
    if (!$width) return;
    if ($width < 0 || $width > 100) return;
    return `width: ${$width}%;`;
  }}

  &::placeholder {
    color: #ccc;
  }
`;
