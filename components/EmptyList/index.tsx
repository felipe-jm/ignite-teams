import * as S from "./styles";

type EmptyListProps = {
  readonly message: string;
};

export function EmptyList({ message }: EmptyListProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
