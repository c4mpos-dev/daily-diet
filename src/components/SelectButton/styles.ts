import { useTheme } from "styled-components";
import styled, { css } from "styled-components/native";

export type ButtonDietTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
  isActive?: boolean;
}

type Props = ButtonDietTypeStyleProps;

export const Container = styled.TouchableOpacity<Props>`
    flex: 1;
    height: 50px;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ type, isActive }: ButtonDietTypeStyleProps) => css`
      background-color: ${
        isActive ? true && type === 'PRIMARY' 
          ? useTheme().COLORS.GREEN_LIGHT : useTheme().COLORS.RED_LIGHT 
          : useTheme().COLORS.GRAY_600
        };
      border: 1px solid ${
        isActive ? true && type === 'PRIMARY' 
          ? useTheme().COLORS.GREEN_DARK : useTheme().COLORS.RED_DARK
          : useTheme().COLORS.GRAY_600
        };
    `
    };
`

export const Title = styled.Text`
    ${() => css`
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        font-size: ${useTheme().FONT_SIZE.MD}px;
        color: ${useTheme().COLORS.GRAY_100};
    `};
`

export const Status = styled.View<Props>`
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 10000px;
    background-color: ${({ type }: ButtonDietTypeStyleProps) => type === 'PRIMARY' ?
        useTheme().COLORS.GREEN_DARK : useTheme().COLORS.RED_DARK
    };
`