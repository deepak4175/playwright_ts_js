export const testConfig = {
    baseUrl: '̥', // Default value, update in setup
    sharedData: {
      adminToken: '',
      userToken: '',
    },
    cpData : {
      username: '1234234234',
      password: 'password',
      client_id: 'client_id',
      grant_type: 'grant_type',
    }

  };
  
  /**
   * Updates a key-value pair inside testConfig.sharedData
   * @param key Key name
   * @param value Value to store
   */
  export function setSharedData(key: keyof typeof testConfig.sharedData, value: string): void {
    testConfig.sharedData[key] = value;
  }
  
  /**
   * Retrieves a stored value from testConfig.sharedData
   * @param key Key name
   * @returns Value from sharedData
   */
  export function getSharedData(key: keyof typeof testConfig.sharedData): string {
    return testConfig.sharedData[key];
  }
  