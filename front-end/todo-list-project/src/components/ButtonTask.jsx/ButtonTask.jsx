import * as S from "./styles";

export function ButtonTask({children, $emphasis}) {

    const handleClick = () => {
        console.log("click");
        return (
        <>
            <h1>Modal</h1>
        </>
        )
    }

    return (
        <S.ButtonTaskContainer onClick={() => handleClick()} $emphasis={$emphasis}>
            <S.ButtonTaskText $emphasis={$emphasis}>{children}</S.ButtonTaskText>
        </S.ButtonTaskContainer>
    );
}