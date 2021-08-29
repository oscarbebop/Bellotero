import { LeftArrow, RightArrow } from 'design-system/icons';

import { ButtonContainer } from './ArrowButton.styles';

interface IProps {
  direction: 'left' | 'right';
  action: () => void;
}

export default function ArrowButton(props: IProps) {
  const { action, direction } = props;

  return (
    <ButtonContainer onClick={action} type="button">
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </ButtonContainer>
  );
}
