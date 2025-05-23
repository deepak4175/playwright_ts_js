import { z } from 'zod';

// Define schema for an individual delivery address
const deliveryAddressSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z.number(),
  alternate_phone_number: z.number(),
  email: z.string().email(),
  address_line_1: z.string(),
  address_line_2: z.string().nullable().optional(),
  landmark: z.string(),
  city: z.string(),
  state: z.string(),
  pincode: z.number(),
});

// Define schema for the main response
export const deliveryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(deliveryAddressSchema),
});
