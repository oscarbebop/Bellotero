import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Paragraph = styled.p<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.paragraph};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.regular};
  margin: 0;
  line-height: 1.5;
`;

export default Paragraph;
