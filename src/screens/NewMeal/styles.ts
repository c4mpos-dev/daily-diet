import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
    flex: 1;
`;

export const ContainerNewMealHeader = styled(SafeAreaView)`
`;

export const NewMealHeader = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_500};
    `}
    height: 140px;
    justify-content: center;
    margin-bottom: -15px;
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
`;