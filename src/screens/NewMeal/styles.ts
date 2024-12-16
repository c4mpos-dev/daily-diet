import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
`;

export const NewMealHeader = styled.TouchableOpacity`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_500};
    `}
    height: 140px;
    justify-content: center;
    margin-bottom: -15px;
`;

export const ContainerNewMealHeader = styled(SafeAreaView)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerNewMealInfo = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_700 };
    `}
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

export const BackIcon = styled(ArrowLeft)`
    ${() => css`
        color: ${useTheme().COLORS.GRAY_200};
    `}
    margin-left: 24px; 
`;

export const Title = styled.Text`
    ${() => css`
        color: ${useTheme().COLORS.GRAY_100};
        font-size: ${useTheme().FONT_SIZE.LG}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
    `}
    flex: 1;
    text-align: center;
    margin-right: 48px;
`;

export const ContainerName = styled.View`

`;

export const TextName = styled.Text`
    ${() => css`
        color: ${useTheme().COLORS.GRAY_200};
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
    `}
    margin: 45px 0 0 24px;
`;