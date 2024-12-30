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
    padding: 0 24px;
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

export const Label = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.MD}px;
    color: ${useTheme().COLORS.GRAY_200};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
  `}
    margin-top: 30px;
`;

export const ContainerName = styled.View`
    height: 100px;
    gap: 4px;
`;

export const ContainerDescription = styled.View`
    height: 170px;
    gap: 4px;
`;

export const ContainerDateTime = styled.View`
    width: 100%;
    height: 105px;
    flex-direction: row;
    gap: 20px;
    margin-top: -10px;
`;

export const DateTimeContent = styled.View`
    flex: 1;
    gap: 4px;
    max-height: 100px;
`;

export const OptionContainer = styled.View`
    width: 100%;
    flex: 1;
    gap: 4px;
`;

export const OptionContent = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 20px;
    flex: 1;
`;