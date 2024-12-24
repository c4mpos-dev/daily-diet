import { useTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.35);
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    width: 355px;
    height: 225px;
    padding: 40px 24px;
    background-color: ${() => useTheme().COLORS.GRAY_700};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
`;

export const Title = styled.Text`
    ${() => css`
        font-family: ${useTheme().FONT_FAMILY.BOLD};
        font-size: ${useTheme().FONT_SIZE.LG}px;
        color: ${useTheme().COLORS.GRAY_200};
    `}
    text-align: center;
    margin-bottom: 32px;
    padding-left: 12px;
    padding-right: 12px;
`;

export const ButtonWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;