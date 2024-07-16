import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  border-radius: 8px;

  width: 100%;

  text-align: center;
`;

export const RetroCard = styled(Card)`
  background-color: #f7f1e3; /* 크림색 배경 */
  border: 2px solid #d1ccc0; /* 연한 갈색 테두리 */
  border-radius: 8px; /* 모서리를 약간 둥글게 */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    /* 그림자 추가 */ -5px -5px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  font-family: "Courier New", Courier, monospace; /* 타자기 스타일 폰트 */
  color: #333; /* 어두운 글자 색상 */
  text-shadow: 1px 1px 2px #d1ccc0; /* 글자에 약간의 그림자를 추가하여 입체감을 줌 */
`;

export const ArcadeCard = styled(Card)`
  background-color: #ff4757; /* 밝은 빨간색 */
  color: #ffffff; /* 흰색 텍스트 */
  border: none;
  border-radius: 5px; /* 약간 둥근 모서리 */
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0 4px #d63031,
    /* 아래쪽에 짙은 그림자를 주어 입체감을 생성 */ 0 8px #b71540,
    0 12px #ff6b81;
  transition: transform 0.1s ease, box-shadow 0.1s ease; /* 클릭 시 변화하는 효과를 부드럽게 */
  height: 10vh;
  overflow: hidden;

  &:hover {
    background-color: #ff6b81; /* 마우스 오버 시 밝은 색으로 변경 */
  }

  &:active {
    transform: translateY(4px); /* 클릭 시 버튼이 약간 아래로 움직이는 효과 */
    box-shadow: 0 2px #d63031; /* 클릭 시 그림자 크기 감소 */
  }
`;
