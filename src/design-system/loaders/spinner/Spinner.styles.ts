import styled, { keyframes } from 'styled-components';

import { colors } from 'design-system/colors';

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-left-color: ${colors.cobaltBlue};
  animation: ${spin} 1s ease infinite;
`;
