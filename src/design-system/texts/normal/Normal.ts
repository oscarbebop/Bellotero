import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Normal = styled.h4`
  font-size: ${fontStyles.fontSize.normal};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.bold};
`;

export default Normal;
