import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Title = styled.h1`
  font-size: ${fontStyles.fontSize.title};
  color: ${colors.white};
  font-weight: ${fontStyles.fontWeight.black};
  background-color: ${colors.cobaltBlue};
`;

export default Title;
