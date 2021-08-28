import { LeftArrow, RightArrow } from 'design-system/icons';

import { ButtonContainer } from './ArrowButton.styles';

interface IProps {
  direction: 'left' | 'right';
}

export default function ArrowButton(props: IProps) {
  const { direction } = props;

  return (
    <ButtonContainer>
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </ButtonContainer>
  );
}
