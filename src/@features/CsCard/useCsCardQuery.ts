import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCsCard } from "./api";
import { ICsCard } from "./type";

const useCsCardQuery = () => {
  const queryClient = useQueryClient();

  const mutationUpdate = useMutation({
    mutationFn: (data: ICsCard) => updateCsCard(data),
    onSuccess: (res) => {
      alert("수정되었습니다.");
      queryClient.setQueryData(["csCards", res.id], res);
    },
  });

  return {
    mutationUpdate,
  };
};

export default useCsCardQuery;
