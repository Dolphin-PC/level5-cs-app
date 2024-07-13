import { getCsCardById } from "@/api/cs-card";
import { useSuspenseQuery } from "@tanstack/react-query";

const CsCardDetail = ({ id }: { id: number }) => {
  const { data: card } = useSuspenseQuery({
    queryKey: ["card", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });

  return (
    <>
      <small>id: {card.id}</small>
      <h1>{card.title}</h1>
      <hr />
    </>
  );
};

export default CsCardDetail;
