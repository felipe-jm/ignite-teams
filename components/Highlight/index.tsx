import * as S from "./styles";

type HighlightProps = {
  readonly title: string;
  readonly subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
