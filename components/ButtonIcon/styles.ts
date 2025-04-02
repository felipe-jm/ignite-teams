import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonIconProps = {
  readonly type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonIconProps>`
  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;

  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  })
)``;
