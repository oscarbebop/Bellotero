import { LeftArrow, RightArrow } from 'design-system/icons';

import { ButtonContainer } from './ArrowButton.styles';

interface IProps {
  direction: 'left' | 'right';
  action: () => void;
}

export default function ArrowButton(props: IProps): JSX.Element {
  const { action, direction } = props;

  return (
    <ButtonContainer aria-label="arrow button" onClick={action} type="button">
      {direction === 'left' ? <LeftArrow /> : <RightArrow />}
    </ButtonContainer>
  );
}
