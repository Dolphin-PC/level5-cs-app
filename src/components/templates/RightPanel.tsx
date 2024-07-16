import * as S from "@/styles/index.style";
import { ReactNode } from "react";

interface Props {
  main: ReactNode;
  right: ReactNode;
}

const RightPanel = ({ main, right }: Props) => {
  return (
    <S.div.Row
      style={{
        width: "80%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <div style={{ minWidth: "700px", width: "100%" }}>{main}</div>
      <div
        style={{ position: "fixed", right: 0, minWidth: "300px", width: "30%" }}
      >
        {right}
      </div>
    </S.div.Row>
  );
};

export default RightPanel;
