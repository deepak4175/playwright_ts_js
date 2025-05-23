import { request, APIRequestContext, test as baseTest } from '@playwright/test';
import { ApiHelper } from '../../../util/apiHelper';

type Fixtures = {
  authToken: string;
  apiContext: APIRequestContext;
  apiHelper: ApiHelper;
};

export const test = baseTest.extend<Fixtures>({
  // ✅ Correctly define 'authToken' fixture
  authToken: async ({}, use) => {
    const token = process.env.Authtoken; // Fetch token from environment
    if(token!==undefined){
    console.log(`token successfully fetched from env`);
    }
    if (!token) {
      throw new Error('authToken is missing! Ensure globalSetup.ts sets it.');
    }
    await use(token); // Pass token to tests
  },

  // ✅ Correctly define 'apiContext' with 'worker' scope
  apiContext: async ({baseURL}, use) => {
    const apiContext = await request.newContext({baseURL});
    console.log('Using apiContext');
    await use(apiContext);
    console.log('Disposing apiContext');
    await apiContext.dispose(); // Cleanup after tests
  },
  // ✅ Correctly define 'apiHelper' and pass 'apiContext'
  apiHelper: async ({ apiContext }, use) => {
    console.log('Using apiHelper');
    const apiHelper = new ApiHelper(apiContext);
    await use(apiHelper);
  }

});

export { expect } from '@playwright/test' ;
