import { Container, PriceContainer } from './EconomicResult.styles';

import { colors } from 'design-system/colors';
import { Big, Small, Value } from 'design-system/texts';

interface IProps {
  amount: number;
  text: string;
}

export default function EconomicResult(props: IProps): JSX.Element {
  const { text, amount } = props;

  return (
    <Container>
      <PriceContainer>
        <Value color={colors.cobaltBlue}>$</Value>
        <Big>{amount}</Big>
      </PriceContainer>
      <Small>{text}</Small>
    </Container>
  );
}
