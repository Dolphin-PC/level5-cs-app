import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect } from "react";
import _ from "lodash";

interface Props {
  length: number;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  hasNextPage: boolean;
  marginBottom?: number;
}

const useScroll = ({
  length,
  fetchNextPage,
  hasNextPage,
  marginBottom = 0,
}: Props) => {
  /**
   * 스크롤이 생길때까지 계속 fetch
   *  - length를 받는 이유는 데이터를 계속해서 fetch하기 위함
   *  - 계속해서 받다가, [clientHeight >= scrollHeight]:스크롤이 생기면 끝
   */
  useEffect(() => {
    const { scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight >= scrollHeight && hasNextPage) {
      fetchNextPage();
    }
  }, [length, fetchNextPage, hasNextPage]);

  /** 스크롤이 닿기 전, 데이터 fetch */
  useEffect(() => {
    const scrollFetch = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      console.log({ scrollTop, scrollHeight, clientHeight });
      if (clientHeight + scrollTop >= scrollHeight - marginBottom) {
        if (hasNextPage) fetchNextPage();
      }
    };

    const handleScroll = _.throttle(scrollFetch, 300);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, fetchNextPage, marginBottom]);
};

export default useScroll;
