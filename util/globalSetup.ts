import { APIRequestContext, APIResponse, request, FullConfig } from '@playwright/test';
import { baseurl } from '../config/baseurl';
import { endpoint } from '../config/endpoint';
import { ApiHelper } from '../util/apiHelper';
import { testConfig } from '../config/testconfig';


async function globalSetup(config: FullConfig): Promise<void> {
    console.log('Running global setup...');
    const apiRequest: APIRequestContext = await request.newContext();
     const apiHelper = new ApiHelper(apiRequest);
    const headers: Record<string, string> = {};
    const globalSetupObject = new GlobalSetup(apiRequest, apiHelper, headers);
    const projectArg: string | undefined = process.argv.find(arg => arg.startsWith('--project='));
    const projectNameCli: string = projectArg ? projectArg.split('=')[1] : 'defaultProject'; // Provide fallback
    let token: string = '';
    if (projectNameCli === 'CP_API_Tests') {
       token= await globalSetupObject.testKeyclockAuth();
    }
    else {
        console.log('No global setup required for this project');
    }
    process.env.Authtoken = token;
    console.log('Global setup completed');
}
class GlobalSetup {
    apiRequest: APIRequestContext;
    apiHelper: ApiHelper;
    headers: Record<string, string>;
    constructor(apiRequest: APIRequestContext, apiHelper: ApiHelper, headers: Record<string, string>) {
        this.apiRequest = apiRequest;
        this.apiHelper = apiHelper;
        this.headers = headers
    }

    async testKeyclockAuth(): Promise<string> {
        this.headers= {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const body: string = new URLSearchParams({
            'grant_type': testConfig.cpData.grant_type,
            'username': testConfig.cpData.username,
            'password': testConfig.cpData.password,
            'client_id': testConfig.cpData.client_id
        }).toString();
        const response: APIResponse = await this.apiHelper.post(`${baseurl.testKeyclock}${endpoint.cp.testKeyclockendpoint}`, body, this.headers);
        let token: string = '';
        if (response.status() == 200) {
            const responseJson = await response.json();
            token = await responseJson.access_token.toString()
            console.log(`✅ Data stored in process env`);
        } else {
            console.log(`❌ Data not stored in testConfig.ts`);
        }
        return token;
    }
}
export default globalSetup;


