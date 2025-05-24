import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";

export const TaskItem = () => {
    return (
        <S.TaskItemContainer>
            <S.TaskContentContainer>
                <S.TaskTitle>Colocar razão para o cachorro</S.TaskTitle>
                <S.TaskButtonContainer>
                    <ButtonTask $emphasis={true}>Deletar</ButtonTask>
                    <ButtonTask >Editar</ButtonTask>
                </S.TaskButtonContainer>
            </S.TaskContentContainer>
            <S.ResponsibleContent>Vinicius</S.ResponsibleContent>

        </S.TaskItemContainer>
    );
};