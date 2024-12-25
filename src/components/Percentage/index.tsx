import { TouchableOpacityProps } from 'react-native';

import { ButtonIconTypeStyleProps, Container, Desciption, StatisticsIcon, Title, BackIcon } from './styles';

export type PercentageProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonIconTypeStyleProps;
  detail?: boolean;
  back?: boolean;
}

export function Percentage({title, type, back, detail, ...rest }: PercentageProps) {
  if(parseFloat(title) >= parseFloat('50,00')) {
    type="PRIMARY"
  } else {
    type="SECONDARY"
  }

  return (
    <Container {...rest} type={type}>
      {detail && <StatisticsIcon type={type}/>}
      {back && <BackIcon type={type}/>}

      <Title>
        {title}
      </Title>

      <Desciption>
        das refeições dentro da dieta
      </Desciption>
    </Container>
  );
}