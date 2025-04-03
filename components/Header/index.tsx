import { useRouter } from "expo-router";

import * as S from "./styles";

import logoImg from "@/assets/images/logo.png";
type HeaderProps = {
  readonly showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
