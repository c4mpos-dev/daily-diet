import styled, { useTheme } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${() => useTheme().COLORS.GRAY_200};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
    color: useTheme().COLORS.GREEN_MID,
    size: useTheme().FONT_SIZE.XL,
}))``