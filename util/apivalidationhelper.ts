import { APIResponse,expect } from '@playwright/test';
import { z } from 'zod';
export class Apivalidationhelper {
    
    // Validate response status code
    static async validateStatus(response: APIResponse, expectedStatus: number) {
       await expect(response.status()).toBe(expectedStatus);
    }

    // Validate API response against an Zod schema
    static async validateSchema(response: APIResponse, schema: z.Schema) {
        const jsonResponse = await response.json();
        const validate =await schema.safeParse(jsonResponse);
        console.log('Schema Validation:', validate);
        if (await !validate.success) {
            console.error('Schema Validation Failed:', validate.error);
        }
    }

} 