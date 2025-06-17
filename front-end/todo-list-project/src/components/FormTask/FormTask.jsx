import { useContext } from "react";
import { ButtonTask } from "../ButtonTask.jsx/ButtonTask";
import * as S from "./styles";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import { TASK_POST, TASK_PUT } from "../../api";

export const FormTask = () => {
    const navigate = useNavigate();
    const { task, handleModal, setTask } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (task === null) {
            const body = {
                "description": e.target.description.value,
                "responsible": e.target.responsible.value
            }
            const fetchTaskPost = async () => {
                const {url, options} = TASK_POST(body);
                const response = await fetch(url, options);
                const json = await response.json();

            }
            fetchTaskPost();
            navigate("/");
            return
        }

        const body = {
            "id": task.id,
            "description": e.target.description.value,
            "responsible": e.target.responsible.value
        }
        const fetchTaskUpdate = async (body) => {
            const {url, options} = TASK_PUT(body);
            const response = await fetch(url, options);
            const json = await response.json();
        }
        
        fetchTaskUpdate(body);

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
                <S.FormTaskInput id="responsible" name="responsible" type="text" placeholder="Responsável" defaultValue={task === null ? '' : task.responsible} />
            </S.FormTaskContent>
            <ButtonTask>Salvar</ButtonTask>
        </S.FormTaskContainer>
    );
};