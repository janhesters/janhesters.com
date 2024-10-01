import { z } from 'zod';

export const emailCaptureClientSchema = z.object({
  email: z.string().email(),
});
