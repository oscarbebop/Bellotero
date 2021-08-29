import Layout from 'components/layout';
import EconomicResult from 'components/economic-result';
import RangeSelector from 'components/range-selector';
import { Paragraph, Title } from 'design-system/texts';

import {
  AmountContainer,
  CalculatorContainer,
  Container,
  Content,
  InformationContainer,
  TitleContainer,
} from './Configurator.styles';

export default function Configurator() {
  return (
    <Layout>
      <Container>
        <InformationContainer>
          <TitleContainer>
            <Title>Save more with</Title>
            <Title>Bellotero.io</Title>
          </TitleContainer>
          <Paragraph>
            With Bellotero.io you save time and money make real-time decisions
            that boost your business and your bottom line. Get less wrongfully
            blocked payments, save time on bookkeeping and no need to worry
            about safety.
          </Paragraph>
        </InformationContainer>
        <CalculatorContainer>
          <Content>
            <RangeSelector
              initialValue={36.211}
              text="Monthly ingredient spending"
              type="spending"
            />
            <RangeSelector
              initialValue={8}
              text="Full-time employees that process invoices"
              type="employees"
            />
            <AmountContainer>
              <EconomicResult
                amount={8.611}
                text="Estimated cost food savings"
              />
              <EconomicResult
                amount={36.211}
                text="Your estimated annual savings"
              />
            </AmountContainer>
          </Content>
        </CalculatorContainer>
      </Container>
    </Layout>
  );
}
