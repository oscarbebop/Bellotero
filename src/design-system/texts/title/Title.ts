import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Title = styled.h1<{ children: React.ReactNode }>`
  font-size: ${fontStyles.fontSize.title};
  color: ${colors.white};
  font-weight: ${fontStyles.fontWeight.black};
  background-color: ${colors.cobaltBlue};
  padding: 8px 4px;
  width: fit-content;
  margin: 5px 0;
`;

export default Title;
