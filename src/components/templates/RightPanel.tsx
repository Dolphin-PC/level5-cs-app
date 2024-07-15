import * as S from "@/styles/index.style";
import { Fragment, ReactNode } from "react";

interface Props {
  main: ReactNode;
  right: ReactNode;
}

const RightPanel = ({ main, right }: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      {main}
      {/* <button className="toggle-button" onClick={toggle}>
        {isOpen ? "Close" : "Open"} Panel
      </button> */}
      <S.div.Container>{right}</S.div.Container>
    </Fragment>
  );
};

export default RightPanel;
