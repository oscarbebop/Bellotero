import styled from 'styled-components';

import { colors } from 'design-system/colors';

export const Header = styled.header`
  width: 100%;
  height: 74px;
  background-color: ${colors.white};
`;

export const Container = styled.div`
  max-width: 1130px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 150px 1fr;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkContainer = styled.div<{ active: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 50px;
  border-top: 4px solid
    ${({ active }) => (active ? `${colors.cobaltBlue}` : `${colors.white}`)};
`;
