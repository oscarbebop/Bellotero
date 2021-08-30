import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INavigation, IState } from 'types';

import { getNavigation } from 'actions/generalActions';

import { NavLink, useLocation } from 'react-router-dom';
import { colors } from 'design-system/colors';
import { fontStyles } from 'design-system/font-styles';
import { Logo } from 'design-system/icons';
import { Small } from 'design-system/texts';

import {
  Container,
  HeaderContainer,
  LinkContainer,
  LogoContainer,
  NavContainer,
} from './Header.styles';

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const { navigation } = useSelector((state: IState) => state.globalState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigation) {
      const loadNavigation = () => dispatch(getNavigation());
      loadNavigation();
    }
  }, [dispatch, navigation]);

  return (
    <HeaderContainer>
      <Container>
        <NavLink to="/page-1" aria-label="logo button">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </NavLink>
        <NavContainer>
          {navigation &&
            navigation.map((element: INavigation) => (
              <NavLink
                aria-label={element.text}
                activeClassName="selected"
                key={element.text}
                to={`/${element.route}`}
                className={element.route === '#' ? 'avoid-clicks' : ''}
              >
                <LinkContainer active={pathname === `/${element.route}`}>
                  <Small
                    color={colors.cobaltBlue}
                    weight={fontStyles.fontWeight.medium}
                  >
                    {element.text}
                  </Small>
                </LinkContainer>
              </NavLink>
            ))}
        </NavContainer>
      </Container>
    </HeaderContainer>
  );
}
