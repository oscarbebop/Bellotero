import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'types';

import { getTestimonials } from 'actions/generalActions';

import ErrorLayout from 'components/error-layout';
import Layout from 'components/layout';
import LoadingLayout from 'components/loading-layout';
import Pagination from 'components/pagination';
import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';
import { Normal, Small, SubTitle, Title } from 'design-system/texts';

import {
  Container,
  InformationContainer,
  TestimonialContainer,
  UserContainer,
} from './Testimonial.styles';

export default function Testimonial(): JSX.Element {
  const { currentTestimonial, error, loading, testimonialPage } = useSelector(
    (state: IState) => state.globalState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!testimonialPage) {
      const loadTestimonials = () => dispatch(getTestimonials());
      loadTestimonials();
    }
  }, [dispatch, testimonialPage]);

  return (
    <>
      {loading ? (
        <LoadingLayout />
      ) : (
        <>
          {error ? (
            <ErrorLayout />
          ) : (
            <Layout>
              {testimonialPage && (
                <Container>
                  <Title>{testimonialPage.title}</Title>
                  <TestimonialContainer>
                    <UserContainer>
                      <SubTitle>
                        {testimonialPage.reviews[currentTestimonial].name}
                      </SubTitle>
                      <Small
                        color={colors.greyish}
                        weight={fontStyles.fontWeight.regular}
                      >
                        {testimonialPage.reviews[currentTestimonial].position}
                      </Small>
                    </UserContainer>
                    <InformationContainer>
                      <Normal>
                        {testimonialPage.reviews[currentTestimonial].comment}
                      </Normal>
                    </InformationContainer>
                  </TestimonialContainer>
                  <Pagination />
                </Container>
              )}
            </Layout>
          )}
        </>
      )}
    </>
  );
}
