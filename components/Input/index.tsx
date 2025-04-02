import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

type InputProps = TextInputProps;

export default function Input({ ...rest }: InputProps) {
  const { COLORS } = useTheme();

  return <S.Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
