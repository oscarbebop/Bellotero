import styled from 'styled-components';

import { colors } from 'design-system/colors';

export const PaginationContainer = styled.div`
  display: flex;
  width: 232px;
  height: 56px;
  background-color: ${colors.cobaltBlue};
  margin-top: -25px;
  align-self: flex-end;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  border-left: 2px solid ${colors.white};
`;
