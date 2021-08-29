import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';
import { Normal, Small, Value } from 'design-system/texts';

import {
  AmountContainer,
  Container,
  InformationContainer,
  InputRange,
  RangeContainer,
  TextContainer,
} from './RangeSelector.styles';

interface IProps {
  initialValue: number;
  text: string;
  type: 'spending' | 'employees';
}

export default function RangeSelector(props: IProps): JSX.Element {
  const { initialValue, text, type } = props;

  return (
    <Container>
      <InformationContainer>
        <TextContainer>
          <Small>{text}</Small>
        </TextContainer>
        <AmountContainer economicValue={type === 'spending'}>
          {type === 'spending' && (
            <Normal color={colors.silver} weight={fontStyles.fontWeight.medium}>
              $
            </Normal>
          )}
          <Value>{initialValue}</Value>
        </AmountContainer>
      </InformationContainer>
      <RangeContainer>
        <InputRange type="range" />
      </RangeContainer>
    </Container>
  );
}
