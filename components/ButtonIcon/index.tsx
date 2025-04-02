import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

type ButtonIconProps = TouchableOpacityProps & {
  readonly icon: keyof typeof MaterialIcons.glyphMap;
  readonly type?: S.ButtonIconTypeStyleProps;
};

export default function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
}
