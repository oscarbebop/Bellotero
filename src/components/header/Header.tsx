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
      const cargarProductos = () => dispatch(getNavigation());
      cargarProductos();
    }
  }, [dispatch, navigation]);

  return (
    <HeaderContainer>
      <Container>
        <NavLink to="/page-1">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </NavLink>
        <NavContainer>
          {navigation &&
            navigation.map((element: INavigation) => {
              console.log(element.route);
              return (
                <NavLink
                  activeClassName="selected"
                  key={element.text}
                  to={`/${element.route}`}
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
              );
            })}
          {/* <NavLink activeClassName="selected" to="/page-1">
            <LinkContainer active={pathname === '/' || pathname === '/page-1'}>
              <Small
                color={colors.cobaltBlue}
                weight={fontStyles.fontWeight.medium}
              >
                Testimonial
              </Small>
            </LinkContainer>
          </NavLink>
          <NavLink activeClassName="selected" to="/page-2">
            <LinkContainer active={pathname === '/page-2'}>
              <Small
                color={colors.cobaltBlue}
                weight={fontStyles.fontWeight.medium}
              >
                Configurator
              </Small>
            </LinkContainer>
          </NavLink> */}
        </NavContainer>
      </Container>
    </HeaderContainer>
  );
}
