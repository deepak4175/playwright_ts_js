import {test,expect} from '../baseTest';
import {endpoint} from '../../../../config/endpoint';
import { allure } from 'allure-playwright';

test.describe('Delivery Address API', () => {


    test('@API verify get delivery address', async ({apiHelper,authToken}) => {
        allure.feature('Delivery Address API');
        allure.story('Get Delivery Address');
        allure.label('severity', 'Critical');
        const headers = {
            'Authorization': `Bearer ${authToken}`,
        };
        const response = await apiHelper.get(`${endpoint.cp.deliveryAddress}`, headers);
        expect(await response.status()).toBe(200);
    });

    test('@API verify get delivery address2', async ({apiHelper,authToken}) => {
        const headers = {
            'Authorization': `Bearer ${authToken}`,
        };
        const response = await apiHelper.get(`${endpoint.cp.deliveryAddress}`, headers);
        expect(await response.status()).toBe(200);
    });

    test('@API verify get delivery address3', async ({apiHelper,authToken}) => {
        const headers = {
            'Authorization': `Bearer ${authToken}`,
        };
        const response = await apiHelper.get(`${endpoint.cp.deliveryAddress}`, headers);
        expect(await response.status()).toBe(200);
    });
});
