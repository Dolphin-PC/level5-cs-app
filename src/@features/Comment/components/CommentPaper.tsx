import { useLayoutEffect } from "react";

import * as S from "@/styles/index.style";

import useComment from "@/@features/Comment/useComment";
import Comment from "@/@features/Comment";

const CommentPaper = ({ csCardId }: { csCardId: number }) => {
  const setCsCardId = useComment((state) => state.setCsCardId);

  //* 렌더가 되기전에, csCardId를 설정
  //! useEffect로 할 경우, 하위 컴포넌트에서 api 호출 -> 지연 -> csCardId설정 -> api 호출 -> 지연 의 경우가 발생함
  /**
   * 예시 상황 : 2번 CsCard의 댓글을 불러오고 싶을 때,
   * - 초기 CsCardId는 null로 설정되어 있음
   * 1. <Comment.List/> 컴포넌트에서 *null* 을 키값으로 댓글을 불러옴 (불필요 API호출임)
   * 2. 하위 컴포넌트의 렌더가 되었으니, useEffect가 실행되어 setCsCardId가 2로 설정됨
   * 3. <Comment.List/> 컴포넌트에서 *2* 를 키값으로 댓글을 불러옴
   */
  useLayoutEffect(() => {
    setCsCardId(csCardId);
  }, [csCardId, setCsCardId]);

  return (
    <S.div.Paper>
      <Comment.NewForm />
      <S.div.Gap $height={30} $width={0} />
      <Comment.List />
    </S.div.Paper>
  );
};

export default CommentPaper;
