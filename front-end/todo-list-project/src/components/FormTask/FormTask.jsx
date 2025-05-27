import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";

export const FormTask = () => {
    return (
        <S.FormTaskContainer>
            <S.FormTaskContent>
                <S.FormTaskLabel htmlFor="description">Descrição</S.FormTaskLabel>
                <S.FormTaskInput type="text" placeholder="Descrição" />
            </S.FormTaskContent>
            <S.FormTaskContent>
                <S.FormTaskLabel htmlFor="responsible">Responsável</S.FormTaskLabel>
                <S.FormTaskInput type="text" placeholder="Responsável" />
            </S.FormTaskContent>
            <ButtonTask>Salvar</ButtonTask>
        </S.FormTaskContainer>
    );
};