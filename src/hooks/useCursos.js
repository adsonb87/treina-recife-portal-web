import { useState } from "react";
import { LISTA_CURSOS } from "../mocks/cursos";

export function useCursos() {
    const [cursos, setCursos] = useState(LISTA_CURSOS);

    return [cursos, setCursos];
}