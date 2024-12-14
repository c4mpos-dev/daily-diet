import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
`;

export const MealText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.MD}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
    margin: 30px 0 0 24px;
`;

export const NewMealButton = styled.TouchableOpacity`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_200};
    `}
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    margin: 5px 24px 0 24px;
    gap: 12px;
`;

export const NewMealText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        color: ${useTheme().COLORS.WHITE};
    `}
    text-align: center;
`;

export const NewMealIcon = styled(Plus)`
    ${() => css`
        color: ${useTheme().COLORS.WHITE};
    `}
`;