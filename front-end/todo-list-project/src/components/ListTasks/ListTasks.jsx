import { useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import * as S from "./styles";
import { ModalTask } from "../ModalTask/ModalTask";
export const ListTasks = () => {
    const [modal, setModal] = useState(true);


    return (
        <S.ListTasksContainer>
            <S.ListTasksTitle>ListTasks</S.ListTasksTitle>
            <S.ListTasks>
                <TaskItem />
                <TaskItem />
            </S.ListTasks>
            {modal && <ModalTask />}
        </S.ListTasksContainer>
    );
};