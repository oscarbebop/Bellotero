export interface INavigation {
  text: string;
  route: string;
}

export interface ITestimonials {
  slider: {
    title: string;
    reviews: [{ name: string; position: string; comment: string }[]];
  };
}

export interface IConfigurator {
  calculator: {
    title: string;
    description: string;
  };
}

export interface IState {
  globalState: IGlobalState;
}

export interface IGlobalState {
  navigation: null | INavigation[];
  loading: boolean;
  error: boolean;
  testimonialPage: null | ITestimonials;
  configuratorPage: null | IConfigurator;
}
