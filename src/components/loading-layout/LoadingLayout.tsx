import { Spinner } from 'design-system/loaders';

import { Container } from './LoadingLayout.styles';

export default function LoadingLayout(): JSX.Element {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
