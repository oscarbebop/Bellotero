import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

interface ISmall {
  color?: string;
  weight?: number;
}

const Small = styled.p<ISmall>`
  font-size: ${fontStyles.fontSize.small};
  ${({ color }) => `color: ${color};`}
  ${({ weight }) => `font-weight: ${weight};`}
`;

Small.defaultProps = {
  color: colors.black,
  weight: fontStyles.fontWeight.bold,
};

export default Small;
