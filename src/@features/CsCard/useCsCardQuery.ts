import { updateCsCard } from "@/api/cs-cards";
import { ICsCard } from "@/types/csCard";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCsCardQuery = () => {
  const queryClient = useQueryClient();

  const mutationUpdate = useMutation({
    mutationFn: (data: ICsCard) => updateCsCard(data),
    onSuccess: (res) => {
      queryClient.setQueryData(["csCards", res.id], res);
    },
  });

  return {
    mutationUpdate,
  };
};

export default useCsCardQuery;
