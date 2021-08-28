import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const SubTitle = styled.h3`
  font-size: ${fontStyles.fontSize.subTitle};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.bold};
`;

export default SubTitle;
