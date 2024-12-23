import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, useTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    padding: 0 24px;
`;

export const MealText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.MD}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
    margin-top: 30px;
`;

export const DateTitle = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.LG}px;
        color: ${useTheme().COLORS.GRAY_100};
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        margin-top: 30px;
    `}
`;