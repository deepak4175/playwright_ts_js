import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelper {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request=request;
  }
  async post( url: string, payload: any, headers: any) : Promise<APIResponse> {
      return await this.request.post(url, 
        {
          headers,
          data: payload
        });
      }
  async get(url: string, headers: Record<string, string>,query?:Record<string,string>) : Promise<APIResponse> {
    return await this.request.get(url,
         { headers,
          ignoreHTTPSErrors: true,
          params: query
         });
      }
    }
  
  module.exports = {ApiHelper};
 

