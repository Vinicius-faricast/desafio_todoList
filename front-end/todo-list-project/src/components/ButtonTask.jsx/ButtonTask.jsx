import * as S from "./styles";

export function ButtonTask({children, $emphasis, callback}) {

    return (
        <S.ButtonTaskContainer onClick={callback} $emphasis={$emphasis}>
            <S.ButtonTaskText $emphasis={$emphasis}>{children}</S.ButtonTaskText>
        </S.ButtonTaskContainer>
    );
}