import Layout from 'components/layout';
import { SubTitle } from 'design-system/texts';

import { Container } from './NotFound.styles';

export default function NotFound(): JSX.Element {
  return (
    <Layout>
      <Container>
        <SubTitle>Page not Found</SubTitle>
      </Container>
    </Layout>
  );
}
