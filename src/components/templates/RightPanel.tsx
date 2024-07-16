import * as S from "@/styles/index.style";
import { ReactNode } from "react";

interface Props {
  main: ReactNode;
  right: ReactNode;
}

const RightPanel = ({ main, right }: Props) => {
  return (
    <S.div.Row
      $gap={80}
      style={{
        width: "80%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <div style={{ minWidth: "300px", width: "70%" }}>{main}</div>
      <div style={{ minWidth: "300px", width: "30%" }}>{right}</div>
    </S.div.Row>
  );
};

export default RightPanel;
