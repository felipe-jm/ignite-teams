import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = TouchableOpacityProps & {
  readonly title: string;
  readonly type?: S.ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
