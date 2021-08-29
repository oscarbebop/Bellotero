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

export const InputRange = styled.input`
  width: 100%;
  margin: 0;
`;
