import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const SubTitle = styled.p<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.subTitle};
  color: ${colors.black};
  font-weight: ${fontStyles.fontWeight.bold};
  margin: 0;
`;

export default SubTitle;
