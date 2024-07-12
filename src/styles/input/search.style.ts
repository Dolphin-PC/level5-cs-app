import styled from "styled-components";

export const SearchInput = styled.input`
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }
`;
