import styled, {useTheme} from 'styled-components/native';

export const Container = styled.View`
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const AvatarContainer = styled.View`
  border: 3px solid ${() => useTheme().COLORS.GRAY_200};
  border-radius: 1000px;
`

export const Avatar = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 1000px;
`;