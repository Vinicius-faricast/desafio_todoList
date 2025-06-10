import { useContext } from "react";
import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";

export const FormTask = () => {
    const navigate = useNavigate();
    const {task, handleModal, setTask} = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.description.value, e.target.responsible.value);
        if(task === null) {
            console.log('chamar a fetch para criar uma nova tarefa');
            navigate("/");
            return
        }

        console.log('chamar a fetch para atualizar uma tarefa');
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