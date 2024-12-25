import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

type Props = {
    inDiet: boolean;
};

export const Container = styled.View`
    flex: 1;
`;

export const MealHeader = styled.TouchableOpacity`
    background-color: ${({ inDiet }: Props) => inDiet === true ? useTheme().COLORS.GREEN_LIGHT : useTheme().COLORS.RED_LIGHT};
    height: 140px;
    justify-content: center;
    margin-bottom: -15px;
`;

export const ContainerMealHeader = styled(SafeAreaView)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
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

export const MealContainer = styled.View`
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: ${() => useTheme().COLORS.GRAY_700};
    padding: 0 24px;
`

export const MealTitle = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.XL}px;
        color: ${useTheme().COLORS.GRAY_100};
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        margin-top: 50px;
    `}
`

export const MealDescription = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.MD}px;
        color: ${useTheme().COLORS.GRAY_200};
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
        margin-top: 10px;
    `}
`

export const DateTimeTitle = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.LG}px;
    color: ${useTheme().COLORS.GRAY_100};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    margin-top: 24px;
  `}
`

export const Tag = styled.View`
    background-color: ${() => useTheme().COLORS.GRAY_600};
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-left: 15px;
    align-items: center;
    height: 34px;
    width: 45%;
    margin-top: 22px;
    gap: 10px;
    border-radius: 10000px;
`

export const TagStatus = styled.View<Props>`
    height: 10px;
    width: 10px;
    border-radius: 10000px;
    background-color: ${({ inDiet }: Props) => inDiet === true ? useTheme().COLORS.GREEN_MID : useTheme().COLORS.RED_MID};
`

export const TagText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.MD}px;
        color: ${useTheme().COLORS.GRAY_100};
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
`