import { NextRequest, NextResponse } from 'next/server';

// Deferred: Lead capture implementation (MASTER_SPEC §11.1, §14)
// Dependencies: Prisma models, Zod validation, CRM webhook
// This scaffold establishes the route. Logic will be added when Lead System is implemented.

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Not implemented', message: 'Lead capture API is not yet active.' },
    { status: 501 }
  );
}
