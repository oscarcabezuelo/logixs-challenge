import {
  API_KEY,
  DONE_LIST_ID,
  PENDING_LIST_ID,
  TOKEN,
} from "@/data/trelloKeys";
import { toast } from "@/components/ui/use-toast";

export const fetchListChange = async (idCard: string, idList: string) => {
  let newList = PENDING_LIST_ID;
  if (idList === DONE_LIST_ID) {
    newList = PENDING_LIST_ID;
  } else if (idList === PENDING_LIST_ID) {
    newList = DONE_LIST_ID;
  } else {
    newList = PENDING_LIST_ID;
  }

  const url = `https://api.trello.com/1/cards/${idCard}?idList=${newList}&key=${API_KEY}&token=${TOKEN}`;
  await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  })
    .then((res) => {
      toast({
        title: "¡Estado cambiado correctamente!",
        description:
          "¡Buenas noticias! Se ha cambiado correctamente el estado de la incidencia.",
      });
    })
    .catch((err) =>
      toast({
        variant: "destructive",
        title: "Houston, tenemos un problema.",
        description:
          "Ha habido un error al cambiar el estado. Por favor, habla con el equipo para solucionarlo.",
      })
    );
};
