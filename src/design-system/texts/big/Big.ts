import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Big = styled.h2<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.big};
  color: ${colors.cobaltBlue};
  font-weight: ${fontStyles.fontWeight.medium};
`;

export default Big;
