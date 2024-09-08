import { ApiConfig } from '@common/types/api';
// import { SHOPIFY_CHECKOUT_ID_COOKIE } from '@framework/const';
import { fetchApi } from '../utils';

class Config {
  private config: ApiConfig;
  //   private config: any;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  //   checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE,
  apiUrl: 'http://localhost:4000/graphql',
  fetch: fetchApi,
});

export function getConfig() {
  return configWrapper.getConfig();
}
