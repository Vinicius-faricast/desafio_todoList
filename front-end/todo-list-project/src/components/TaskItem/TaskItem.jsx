import { useContext } from "react";
import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";
import { Context } from "../../context/Context";

export const TaskItem = ({id, responsible, description}) => {
    const {handleModal} = useContext(Context);

    const clickHandler = (responsible, description) => {
        console.log(responsible, description);
        handleModal();

    }

    const deleteHandler = (id) => {
        console.log(id);
    }

    return (
        <S.TaskItemContainer>
            <S.TaskContentContainer>
                <S.TaskTitle>{description}</S.TaskTitle>
                <S.TaskButtonContainer>
                    <ButtonTask $emphasis={true} callback={() => deleteHandler(id)}>Deletar</ButtonTask>
                    <ButtonTask callback={() =>clickHandler(responsible, description)}>Editar</ButtonTask>
                </S.TaskButtonContainer>
            </S.TaskContentContainer>
            <S.ResponsibleContent>{responsible}</S.ResponsibleContent>

        </S.TaskItemContainer>
    );
};