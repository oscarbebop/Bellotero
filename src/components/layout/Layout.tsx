import Navigation from 'components/navigation';

import { Main } from './Layout.styles';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  const { children } = props;

  return (
    <Main>
      <Navigation />
      {children}
    </Main>
  );
}
