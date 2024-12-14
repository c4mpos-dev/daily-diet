import styled, { css, useTheme } from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | "TERTIARY";

export type ButtonIconStyleProps = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonIconStyleProps>`
  justify-content: center;
  align-items: center;
  height: 102px;
  margin: 20px 24px 0 24px;
  border-radius: 8px;
  background-color: ${({ type }: ButtonIconStyleProps) => type === 'PRIMARY' ? useTheme().COLORS.GREEN_LIGHT : type === 'SECONDARY' ? useTheme().COLORS.RED_LIGHT : undefined};
`;

export const Title = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.XXL}px;
    color: ${useTheme().COLORS.GRAY_200};
    font-family: ${useTheme().FONT_FAMILY.BOLD};
    
    text-align: center;
  `}
`;

export const Desciption = styled.Text`
  ${() => css`
    font-size: ${useTheme().FONT_SIZE.SM}px;
    color: ${useTheme().COLORS.GRAY_200};
    font-family: ${useTheme().FONT_FAMILY.REGULAR};
    padding-bottom: 22px;
    text-align: center;
  `}
`;

export const StatisticsIcon = styled(ArrowUpRight).attrs<ButtonIconStyleProps>(({ type }: ButtonIconStyleProps) => ({
  size: useTheme().FONT_SIZE.XL,
  color: type === 'PRIMARY' ? useTheme().COLORS.GREEN_DARK : type === 'SECONDARY' ? useTheme().COLORS.RED_DARK : undefined,
  fontFamily: useTheme().FONT_FAMILY.BOLD,
}))`
  top: 10px;
  margin: 0 10px 0 auto;
`;

export const BackIcon = styled(ArrowLeft).attrs<ButtonIconStyleProps>(({type}: ButtonIconStyleProps) => ({
  size: useTheme().FONT_SIZE.XL,
  color: type === 'PRIMARY' ? useTheme().COLORS.GREEN_DARK : type === 'SECONDARY' ? useTheme().COLORS.RED_DARK : undefined,
  fontFamily: useTheme().FONT_FAMILY.BOLD,
}))`
  top: 10px;
  margin: 0 auto 0 10px;
`;