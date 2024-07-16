import * as S from "@/styles/index.style";
import _ from "lodash";
import { Fragment } from "react/jsx-runtime";
import useSearch from "../useSearch";

const Form = () => {
  const searchText = useSearch((state) => state.searchText);
  const setSearchText = useSearch((state) => state.setSearchText);

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
        defaultValue={searchText}
        placeholder="궁금한 것을 검색해보세요."
        $width={50}
        onChange={handleSearch}
      />
    </Fragment>
  );
};

export default Form;
