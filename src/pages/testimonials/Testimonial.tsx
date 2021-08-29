import Layout from 'components/layout';
import { ArrowButton } from 'design-system/buttons';
import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';
import {
  Normal,
  Pagination,
  Small,
  SubTitle,
  Title,
} from 'design-system/texts';

import {
  ButtonContainer,
  Container,
  InformationContainer,
  PaginationContainer,
  TestimonialContainer,
  TextContainer,
  UserContainer,
} from './Testimonial.styles';

export default function Testimonial() {
  const sampleClick = () => {
    console.log('It works');
  };

  return (
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
              “It's funny what memory does, isn't it? My favorite holiday
              tradition might not have happened more than once or twice. But
              because it is such a good memory, so encapsulating of everything I
              love about the holidays, in my mind it happened every year.
              Without fail"
            </Normal>
          </InformationContainer>
        </TestimonialContainer>
        <PaginationContainer>
          <TextContainer>
            <Pagination>1/4</Pagination>
          </TextContainer>
          <ButtonContainer>
            <ArrowButton action={sampleClick} direction="left" />
            <ArrowButton action={sampleClick} direction="right" />
          </ButtonContainer>
        </PaginationContainer>
      </Container>
    </Layout>
  );
}
