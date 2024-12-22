import {  TouchableOpacity } from "react-native";

import styled, { useTheme, css } from 'styled-components/native';
import { ButtonType } from "./index";

type ButtonStyleProps = {
    variant: ButtonType;
};

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    ${({ variant }: ButtonStyleProps) => css`
        background-color: ${ variant === 'DEFAULT' ? useTheme().COLORS.GRAY_200 : 'transparent' };
        border: 1px solid
        ${ variant === 'DEFAULT' ? 'transparent' : useTheme().COLORS.WHITE };
    `}
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;
    margin-top: 10px;
    border-radius: 6px;
`

export const Title = styled.Text<ButtonStyleProps>`
    ${({ variant }: ButtonStyleProps) => css`
        color: ${variant === 'DEFAULT' ? useTheme().COLORS.WHITE : useTheme().COLORS.GRAY_200 };
        font-size: ${useTheme().FONT_SIZE.MD}px;
        font-family: ${useTheme().FONT_FAMILY.BOLD};
    `}
`