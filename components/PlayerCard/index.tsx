import { TouchableOpacityProps } from "react-native";

import Button from "../Button";

import * as S from "./styles";

type PlayerCardProps = TouchableOpacityProps & {
  readonly name: string;
  readonly onRemove: () => void;
};

export default function PlayerCard({
  name,
  onRemove,
  ...rest
}: PlayerCardProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{name}</S.Title>

      <Button title="Remover" type="SECONDARY" />
    </S.Container>
  );
}
