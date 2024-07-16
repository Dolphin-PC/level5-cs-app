import styled, { css } from "styled-components";

const defaultStyle = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  ${defaultStyle}
`;

export const TextArea = styled.textarea`
  ${defaultStyle}
  resize: none;
  /* height: 100px; */
`;
