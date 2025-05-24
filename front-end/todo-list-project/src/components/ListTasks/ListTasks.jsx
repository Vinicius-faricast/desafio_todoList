import { TaskItem } from "../TaskItem/TaskItem";
import * as S from "./styles";
export const ListTasks = () => {
    return (
        <S.ListTasksContainer>
            <S.ListTasksTitle>ListTasks</S.ListTasksTitle>
            <S.ListTasks>
                <TaskItem />
                <TaskItem />
            </S.ListTasks>
        </S.ListTasksContainer>
    );
};