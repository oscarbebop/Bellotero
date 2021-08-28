import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Value = styled.h2`
  font-size: ${fontStyles.fontSize.title};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.medium};
`;

export default Value;
