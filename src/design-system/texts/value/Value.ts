import styled from 'styled-components';

import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';

interface IValue {
  children: React.ReactNode;
  color?: string;
}

const Value = styled.h2<IValue>`
  font-size: ${fontStyles.fontSize.title};
  ${({ color }) => `color: ${color};`}
  font-weight: ${fontStyles.fontWeight.medium};
  margin: 0;
`;

Value.defaultProps = {
  color: colors.black,
};

export default Value;
