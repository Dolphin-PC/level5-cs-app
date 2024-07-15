import CardForm from "@/components/molecules/CardForm";
import { ICsCard } from "@/types/csCard";
import { SubmitHandler } from "react-hook-form";
import useCsCard from "../useCsCard";
import { updateCsCard } from "@/api/cs-cards";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EditForm = () => {
  const csCard = useCsCard((state) => state.csCard);
  const toggleEditMode = useCsCard((state) => state.toggleEditMode);

  const queryClient = useQueryClient();
  const mutateUpdate = useMutation({
    mutationFn: (data: ICsCard) => updateCsCard(data),
    onSuccess: () => {
      alert("정상 수정되었습니다.");
      toggleEditMode();
      csCard &&
        queryClient.invalidateQueries({ queryKey: ["cs-cards", csCard.id] });
    },
  });

  const onEditCard: SubmitHandler<ICsCard> = async (data) =>
    mutateUpdate.mutate(data);

  if (csCard === null) return null;
  return <CardForm onSubmit={onEditCard} card={csCard} />;
};

export default EditForm;
