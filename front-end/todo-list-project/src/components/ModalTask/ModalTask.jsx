import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import { FormTask } from "../FormTask/FormTask";
import * as S from "./style";

export const ModalTask = () => {
    return (
        <S.ModalTaskContainer>
            <S.ModalTaskContent>
                <ButtonTask>X</ButtonTask>
                <FormTask />
            </S.ModalTaskContent>
        </S.ModalTaskContainer>
    );
};