import { z } from 'zod';

/**
 * Lead validation schema — Single Source of Truth.
 * Used by API routes and frontend forms.
 */
export const leadSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный номер телефона'),
  email: z.string().email('Некорректный email').optional().or(z.literal('')),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(['form', 'quiz', 'callback']).default('form'),
  equipmentType: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;

/**
 * Client-side form schema — omits server-only fields.
 */
export const leadFormSchema = leadSchema.omit({ company: true, source: true });

export type LeadFormInput = z.infer<typeof leadFormSchema>;
