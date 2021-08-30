import { useDispatch } from 'react-redux';

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
  max: number;
  min: number;
  text: string;
  type: 'spending' | 'employees';
  action: (val: number) => void;
}

export default function RangeSelector(props: IProps): JSX.Element {
  const { initialValue, max, min, text, type, action } = props;

  const dispatch = useDispatch();

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
        <InputRange
          min={min}
          max={max}
          value={initialValue}
          step="1"
          type="range"
          onChange={(event) => dispatch(action(Number(event.target.value)))}
        />
      </RangeContainer>
    </Container>
  );
}
