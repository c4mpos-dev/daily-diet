import { TextInput } from "react-native";

import styled, { useTheme } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;

  background-color: transparent;
  color: ${() => useTheme().COLORS.GRAY_200};

  border: 1px ${() => useTheme().COLORS.GRAY_500};

  font-family: ${() => useTheme().FONT_FAMILY.REGULAR};
  font-size: ${() => useTheme().FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 15px;
`;