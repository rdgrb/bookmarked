import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"

export function formatPublishedDate(publishedDate: string): string {
    try {
        return format(parseISO(publishedDate), "dd 'de' LLLL 'de' yyyy", { locale: ptBR });
    } catch (e) {
        return publishedDate;
    }
}