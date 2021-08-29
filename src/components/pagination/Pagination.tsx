import { ArrowButton } from 'design-system/buttons';
import { PaginationText } from 'design-system/texts';

import {
  ButtonContainer,
  PaginationContainer,
  TextContainer,
} from './Pagination.styles';

export default function Pagination(): JSX.Element {
  const next = (): void => {};

  const back = (): void => {};

  return (
    <PaginationContainer>
      <TextContainer>
        <PaginationText>1/4</PaginationText>
      </TextContainer>
      <ButtonContainer>
        <ArrowButton action={next} direction="left" />
        <ArrowButton action={back} direction="right" />
      </ButtonContainer>
    </PaginationContainer>
  );
}
