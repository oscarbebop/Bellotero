import styled from 'styled-components';

import { colors } from 'design-system/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.iceBlue};
`;

export const Content = styled.main`
  width: 1130px;
  margin: 0 auto;

  @media (max-width: 1130px) {
    width: 800px;
  }
`;
