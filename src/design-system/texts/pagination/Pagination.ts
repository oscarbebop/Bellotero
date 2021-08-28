import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

const Pagination = styled.h3`
  font-size: ${fontStyles.fontSize.subTitle};
  color: ${colors.white};
  font-weight: ${fontStyles.fontWeight.semiBold};
  font-style: italic;
  font-family: 'Cormorant Garamond', serif;
`;

export default Pagination;
