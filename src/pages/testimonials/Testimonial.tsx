import { useSelector } from 'react-redux';
import { IState } from 'types';

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
  const { loading } = useSelector((state: IState) => state.globalState);

  return (
    <>
      {loading ? (
        <LoadingLayout />
      ) : (
        <Layout>
          <Container>
            <Title>Our customers love us</Title>
            <TestimonialContainer>
              <UserContainer>
                <SubTitle>Pete Zahut</SubTitle>
                <Small
                  color={colors.greyish}
                  weight={fontStyles.fontWeight.regular}
                >
                  Chef @ Maniak
                </Small>
              </UserContainer>
              <InformationContainer>
                <Normal>
                  It's funny what memory does, isn't it? My favorite holiday
                  tradition might not have happened more than once or twice. But
                  because it is such a good memory, so encapsulating of
                  everything I love about the holidays, in my mind it happened
                  every year. Without fail
                </Normal>
              </InformationContainer>
            </TestimonialContainer>
            <Pagination />
          </Container>
        </Layout>
      )}
    </>
  );
}
