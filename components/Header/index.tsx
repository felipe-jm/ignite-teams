import * as S from "./styles";

import logoImg from "@/assets/images/logo.png";

type HeaderProps = {
  readonly showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
