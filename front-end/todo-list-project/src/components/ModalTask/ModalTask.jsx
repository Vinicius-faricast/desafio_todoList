import { useContext } from "react";
import { Context } from "../../context/Context";
import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import { FormTask } from "../FormTask/FormTask";
import * as S from "./style";

export const ModalTask = () => {

    const {handleModal, setTask} = useContext(Context);

    const handleClick = () => {
        handleModal();
        setTask(null);
    };

    return (
        <S.ModalTaskContainer>
            <S.ModalTaskContent>
                <S.ContainerButtonCloseModalTask>
                    <ButtonTask callback={handleClick}>X</ButtonTask>
                </S.ContainerButtonCloseModalTask>
                <FormTask />
            </S.ModalTaskContent>
        </S.ModalTaskContainer>
    );
};