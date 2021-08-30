import styled from 'styled-components';

import { colors } from 'design-system/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 66px;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const AmountContainer = styled.div<{ economicValue: boolean }>`
  ${({ economicValue }) => (economicValue ? 'width: 190px;' : 'width: 67px;')}
  padding: 6px 12px;
  height: 52px;
  background-color: ${colors.white};
  border: 1px solid ${colors.paleLilac};
  display: flex;
  ${({ economicValue }) =>
    economicValue
      ? 'justify-content: space-between;'
      : 'justify-content: flex-end;'}
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 180px;
`;

export const RangeContainer = styled.div`
  display: flex;
`;

interface IInputRange {
  value: number;
  rangeType: 'spending' | 'employees';
}

export const InputRange = styled.input<IInputRange>`
  width: 100%;
  margin: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 4px;
  background: ${({ rangeType, value }) =>
    value &&
    `linear-gradient(to right, ${colors.cobaltBlue} 0%, ${colors.cobaltBlue} ${
      rangeType === 'spending' ? value : value * 10
    }%, ${colors.paleGrey} ${rangeType === 'spending' ? value : value * 10}%, ${
      colors.paleGrey
    } 100%);`};

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background-image: radial-gradient(circle, #f7f7fc 20%, #071eb3 45%);
    border-radius: 50%;
  }

  ::-moz-range-thumb {
    width: 16px;
    height: 16px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #071eb3 45%);
    border-radius: 50%;
  }
`;
