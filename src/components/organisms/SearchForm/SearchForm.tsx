import * as S from "@/styles/index.style";
import _ from "lodash";
import { useSetRecoilState } from "recoil";
import { searchTextState } from "./atom";
import { Fragment } from "react/jsx-runtime";

const SearchForm = () => {
  const setSearchText = useSetRecoilState(searchTextState);

  const handleSearch = _.debounce(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value;
      setSearchText(searchText);
    },
    500
  );

  return (
    <Fragment>
      <S.input.SearchInput
        placeholder="궁금한 것을 검색해보세요."
        $width={50}
        onChange={handleSearch}
      />

      {/* <S.div.Row $gap={10} style={{ margin: "10px" }}>
        <S.button.Button>BUTTON</S.button.Button>
        <S.button.Button>BUTTON</S.button.Button>
        <S.button.Button>BUTTON</S.button.Button>
      </S.div.Row> */}
    </Fragment>
  );
};

export default SearchForm;
