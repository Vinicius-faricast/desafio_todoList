import { useContext } from "react";
import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";
import { Context } from "../../context/Context";

export const FormTask = () => {
    const {task, handleModal, setTask} = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.description.value, e.target.responsible.value);
        if(task === null) return
        handleModal()
        setTask(null);
    };

    return (
        <S.FormTaskContainer onSubmit={handleSubmit}>
            <S.FormTaskContent>
                <S.FormTaskLabel htmlFor="description">Descrição</S.FormTaskLabel>
                <S.FormTaskInput name="description" type="text" placeholder="Descrição" defaultValue={task === null ? '' : task.description} />
            </S.FormTaskContent>
            <S.FormTaskContent>
                <S.FormTaskLabel htmlFor="responsible">Responsável</S.FormTaskLabel>
                <S.FormTaskInput id="responsible" name="responsible" type="text" placeholder="Responsável" defaultValue={task === null ? '' : task.responsible}/>
            </S.FormTaskContent>
            <ButtonTask>Salvar</ButtonTask>
        </S.FormTaskContainer>
    );
};