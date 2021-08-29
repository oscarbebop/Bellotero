import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

interface INormal {
  children: React.ReactNode;
  color?: string;
  weight?: number;
}

const Normal = styled.p<INormal>`
  font-size: ${fontStyles.fontSize.normal};
  ${({ color }) => `color: ${color};`}
  ${({ weight }) => `font-weight: ${weight};`}
  margin: 0;
`;

Normal.defaultProps = {
  color: colors.black,
  weight: fontStyles.fontWeight.bold,
};

export default Normal;
