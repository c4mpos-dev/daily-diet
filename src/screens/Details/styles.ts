import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css, useTheme } from "styled-components/native";

export type HeaderStyleProps = 'PRIMARY' | 'SECONDARY' | "TERTIARY";

export type StyleProps = {
  type: HeaderStyleProps;
}

export const Container = styled.View`
    flex: 1;
`;

export const ContainerPercentage = styled(SafeAreaView)`
    padding: 0 24px;
`;

export const DetailHeader = styled.View<StyleProps>`
    background-color: ${({ type }: StyleProps) => type === 'PRIMARY' ? useTheme().COLORS.GREEN_LIGHT : type === 'SECONDARY' ? useTheme().COLORS.RED_LIGHT : undefined};
    height: 185px;
    justify-content: center;
    margin-bottom: -15px;
`;

export const ContainerStatistics = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_700 };
    `}
    flex: 1;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;

export const StatisticsText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
    `}
    text-align: center;
    margin-top: 33px;
`;

export const SequenceContainer = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_600};
    `}
    justify-content: center;
    height: 90px;
    margin: 24px 24px 0 24px;
    border-radius: 8px;
    gap: 5px;
    padding: 16px;
`;

export const SequenceText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.XL}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        color: ${useTheme().COLORS.GRAY_100};
    `}
    margin-top: 13px;
    text-align: center;
`;

export const SequenceDesciption = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
        color: ${useTheme().COLORS.GRAY_200};
    `}
    margin-bottom: 16px;
    text-align: center;
`;

export const RegisteredContainer = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GRAY_600};
    `}
    justify-content: center;
    height: 90px;
    margin: 15px 24px 0 24px;
    border-radius: 8px;
    gap: 5px;
    padding: 16px;
`;

export const RegisteredText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.XL}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        color: ${useTheme().COLORS.GRAY_100};
    `}
    margin-top: 13px;
    text-align: center;
`;

export const RegisteredDesciption = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 16px;
    text-align: center;
`;

export const DietsInfoContainer = styled.View`
    height: 110px;
    margin: 15px 24px 0 24px;
    gap: 12px;
    flex-direction: row;
    justify-content: space-between;
`;

export const DietContainer = styled.View`
    ${() => css`
        background-color: ${useTheme().COLORS.GREEN_LIGHT};
    `}
    flex: 1;
    justify-content: center;
    height: 110px;
    border-radius: 8px;
    gap: 5px;
    padding: 16px;
`;

export const DietText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.XL}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        color: ${useTheme().COLORS.GRAY_100};
    `}
    margin-top: 13px;
    text-align: center;
`;

export const DietDesciption = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 16px;
    text-align: center;
`;

export const OffDietContainer = styled.View`
${() => css`
    background-color: ${useTheme().COLORS.RED_LIGHT};
`}
    flex: 1;
    justify-content: center;
    height: 110px;
    border-radius: 8px;
    gap: 5px;
    padding: 16px;
`;

export const OffDietText = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.XL}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        color: ${useTheme().COLORS.GRAY_100};
    `}
    margin-top: 13px;
    text-align: center;
`;

export const OffDietDesciption = styled.Text`
    ${() => css`
        font-size: ${useTheme().FONT_SIZE.SM}px;
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 16px;
    text-align: center;
`;