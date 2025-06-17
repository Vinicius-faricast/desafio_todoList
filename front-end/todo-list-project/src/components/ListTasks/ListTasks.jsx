import { TaskItem } from "../TaskItem/TaskItem";
import * as S from "./styles";
import { ModalTask } from "../ModalTask/ModalTask";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { TASK_GET } from "../../api";
import { TaskFetch } from "../../hooks/TaskFetch";
export const ListTasks = () => {

const { modal } = useContext(Context);

const [tasks, setTasks] = useState([]);

useEffect(()=> {

    const {url, options} = TASK_GET();

    const fetchTasks = async () => {
        const responseJson = TaskFetch(url, options);
        const json = await responseJson;
        setTasks(json);
    }

    fetchTasks();
},[modal, tasks]);

    return (
        <S.ListTasksContainer>
            <S.ListTasksTitle>ListTasks</S.ListTasksTitle>
            <S.ListTasks>
                {tasks && tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        responsible={task.responsible}
                        description={task.description}
                    />
                ))}
            </S.ListTasks>
            {modal && <ModalTask />}
        </S.ListTasksContainer>
    );
};