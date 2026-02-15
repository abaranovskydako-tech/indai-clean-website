import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import { leadSchema } from '@/lib/validation/lead';

/** Server-side schema: base lead fields + UTM tracking */
const leadApiSchema = leadSchema.extend({
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const validated = leadApiSchema.parse(body);

    const lead = await prisma.lead.create({
      data: validated,
    });

    return NextResponse.json(
      { success: true, leadId: lead.id },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Ошибка валидации', details: error.issues },
        { status: 400 },
      );
    }

    console.error('POST /api/leads — ошибка:', error);

    return NextResponse.json(
      { error: 'Ошибка сервера' },
      { status: 500 },
    );
  }
}
