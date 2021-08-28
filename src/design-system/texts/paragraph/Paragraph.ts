import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Paragraph = styled.p`
  font-size: ${fontStyles.fontSize.paragraph};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.regular};
`;

export default Paragraph;
