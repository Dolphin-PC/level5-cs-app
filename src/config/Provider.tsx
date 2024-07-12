import theme from "@/styles/theme.style";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default Provider;
