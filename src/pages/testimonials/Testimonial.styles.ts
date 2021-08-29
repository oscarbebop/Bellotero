import styled from 'styled-components';

import { colors } from 'design-system/colors';

export const Container = styled.section`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TestimonialContainer = styled.div`
  max-width: 1002px;
  height: 254px;
  margin-top: 80px;
  padding: 32px;
  background-color: ${colors.white};
  display: grid;
  grid-template-columns: 360px 1fr;
`;

export const UserContainer = styled.div`
  display: block;
`;

export const InformationContainer = styled.div`
  display: block;
  overflow: auto;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 232px;
  height: 56px;
  background-color: ${colors.cobaltBlue};
  margin-top: -25px;
  align-self: flex-end;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  border-left: 2px solid ${colors.white};
`;
