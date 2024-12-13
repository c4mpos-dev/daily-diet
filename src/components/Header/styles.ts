import styled, {useTheme} from 'styled-components/native';

export const Container = styled.View`
    margin: 15px 24px 0 24px;
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
  border-radius: 100px;
`

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100px;
`;