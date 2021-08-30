import { Value } from 'design-system/texts';

import { Container } from './ErrorLayout.styles';

export default function ErrorLayout(): JSX.Element {
  return (
    <Container>
      <Value>Error loading information</Value>
    </Container>
  );
}
