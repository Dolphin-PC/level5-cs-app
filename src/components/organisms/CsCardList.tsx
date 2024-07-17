import { Fragment } from "react/jsx-runtime";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import * as S from "@/styles/index.style";
import useScroll from "@/hooks/useScroll";

import { getCsCardList } from "@/@features/CsCard/api";
import CsCardButton from "@/components/atoms/CsCardButton";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";

interface Props {
  searchText?: string;
}

const CsCardList = ({ searchText }: Props) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useSuspenseInfiniteQuery({
      queryKey: ["cs-cards", searchText],
      initialPageParam: 1,

      queryFn: ({ pageParam = 1, queryKey }) =>
        getCsCardList({
          _page: pageParam,
          _limit: 6,
          title: queryKey[1] as string,
        }),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < 6) return undefined;
        return allPages.length + 1;
      },
    });

  useScroll({ length: data.pages.length, fetchNextPage, hasNextPage });

  if (data.pages.flat().length == 0) return <h1>아무것도 없어요..</h1>;

  return (
    <Fragment>
      <S.div.Grid style={{ width: "90%" }}>
        {data.pages.flat().map((card) => (
          <CsCardButton key={card.id} {...card} />
        ))}
      </S.div.Grid>
      {isLoading && <LoadingFallbackUI />}
      <S.div.Gap $height={30} $width={0} />
    </Fragment>
  );
};

export default CsCardList;
