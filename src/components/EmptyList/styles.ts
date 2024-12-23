import styled, { css } from 'styled-components/native';
import { useTheme } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
`;

export const MessageTitle = styled.Text`
    ${() => css`
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        font-size: ${useTheme().FONT_SIZE.LG}px;
    `}
    text-align: center;
    margin-bottom: 5px;
    margin-top: 16px;
`;

export const MessageBody = styled.Text`
    ${() => css`
        font-family: ${useTheme().FONT_FAMILY.REGULAR};
        font-size: ${useTheme().FONT_SIZE.LG}px;
        color: ${useTheme().COLORS.GRAY_300};
    `}
    text-align: center;
`;