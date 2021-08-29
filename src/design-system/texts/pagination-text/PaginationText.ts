import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const PaginationText = styled.h3<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.subTitle};
  color: ${colors.white};
  font-weight: ${fontStyles.fontWeight.regular};
  font-style: italic;
  font-family: 'CormorantGaramond', serif;
`;

export default PaginationText;
