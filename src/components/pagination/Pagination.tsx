import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'types';

import { changeTestimonial } from 'actions/generalActions';

import { ArrowButton } from 'design-system/buttons';
import { PaginationText } from 'design-system/texts';

import {
  ButtonContainer,
  PaginationContainer,
  TextContainer,
} from './Pagination.styles';

export default function Pagination(): JSX.Element {
  const { currentTestimonial, testimonialPage } = useSelector(
    (state: IState) => state.globalState
  );

  const dispatch = useDispatch();

  const actualTestimonial = currentTestimonial + 1;
  const totalTestimonials = testimonialPage?.reviews.length;

  const next = (): void => {
    if (totalTestimonials && currentTestimonial < totalTestimonials - 1) {
      dispatch(changeTestimonial(currentTestimonial + 1));
    }
  };

  const back = (): void => {
    if (totalTestimonials && currentTestimonial > 0) {
      dispatch(changeTestimonial(currentTestimonial - 1));
    }
  };

  return (
    <PaginationContainer>
      <TextContainer>
        <PaginationText>
          {actualTestimonial}/{totalTestimonials}
        </PaginationText>
      </TextContainer>
      <ButtonContainer>
        <ArrowButton action={back} direction="left" />
        <ArrowButton action={next} direction="right" />
      </ButtonContainer>
    </PaginationContainer>
  );
}
