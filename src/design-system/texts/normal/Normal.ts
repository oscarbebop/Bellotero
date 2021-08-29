import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Normal = styled.p<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.normal};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.bold};
  margin: 0;
`;

export default Normal;
