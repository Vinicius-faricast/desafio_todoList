import { TaskItem } from "../TaskItem/TaskItem";
import * as S from "./styles";
import { ModalTask } from "../ModalTask/ModalTask";
import { useContext } from "react";
import { Context } from "../../context/Context";
export const ListTasks = () => {

const { modal } = useContext(Context);

const tasks = [{ id: 1, responsible: "Task 1", description: "Description 1" }, { id: 2, responsible: "Task 2", description: "Description 2" }];

    return (
        <S.ListTasksContainer>
            <S.ListTasksTitle>ListTasks</S.ListTasksTitle>
            <S.ListTasks>
                {tasks.map((task) => (
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