import Header from 'components/header';

import { Container, Content } from './Layout.styles';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
