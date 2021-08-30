import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'types';

import {
  getConfigurator,
  updateMonthlyIngredient,
  updateTimeEmployees,
} from 'actions/generalActions';

import ErrorLayout from 'components/error-layout';
import Layout from 'components/layout';
import LoadingLayout from 'components/loading-layout';
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

export default function Configurator(): JSX.Element {
  const {
    configuratorPage,
    error,
    fullTimeEmployees,
    loading,
    monthlyIngredientSpending,
  } = useSelector((state: IState) => state.globalState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!configuratorPage) {
      const loadConfigurator = () => dispatch(getConfigurator());
      loadConfigurator();
    }
  }, [dispatch, configuratorPage]);

  const estimatedFoodCostSaving: number = Number(
    (monthlyIngredientSpending * 0.3).toFixed(2)
  );

  const yourEstimatedAnnualSavings: number = Number(
    (fullTimeEmployees * 1337 + estimatedFoodCostSaving).toFixed(2)
  );

  return (
    <>
      {loading ? (
        <LoadingLayout />
      ) : (
        <>
          {error ? (
            <ErrorLayout />
          ) : (
            <Layout>
              {configuratorPage && (
                <Container>
                  <InformationContainer>
                    <TitleContainer>
                      <Title>
                        {configuratorPage.title.replace('Bellotero.io', '')}
                      </Title>
                      <Title>
                        {configuratorPage.title.replace('Save more with', '')}
                      </Title>
                    </TitleContainer>
                    <Paragraph>{configuratorPage.description}</Paragraph>
                  </InformationContainer>
                  <CalculatorContainer>
                    <Content>
                      <RangeSelector
                        initialValue={monthlyIngredientSpending}
                        text="Monthly ingredient spending"
                        type="spending"
                        min={10}
                        max={100}
                        action={updateMonthlyIngredient}
                      />
                      <RangeSelector
                        initialValue={fullTimeEmployees}
                        text="Full-time employees that process invoices"
                        type="employees"
                        min={1}
                        max={10}
                        action={updateTimeEmployees}
                      />
                      <AmountContainer>
                        <EconomicResult
                          amount={estimatedFoodCostSaving}
                          text="Estimated cost food savings"
                        />
                        <EconomicResult
                          amount={yourEstimatedAnnualSavings}
                          text="Your estimated annual savings"
                        />
                      </AmountContainer>
                    </Content>
                  </CalculatorContainer>
                </Container>
              )}
            </Layout>
          )}
        </>
      )}
    </>
  );
}
