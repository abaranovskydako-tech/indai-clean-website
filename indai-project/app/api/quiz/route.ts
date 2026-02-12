import { NextRequest, NextResponse } from 'next/server';

// Deferred: Quiz calculator implementation (MASTER_SPEC §11.1, §15)
// Dependencies: Prisma models, Zod validation, pricing logic
// This scaffold establishes the route. Logic will be added when Quiz System is implemented.

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Not implemented', message: 'Quiz calculator API is not yet active.' },
    { status: 501 }
  );
}
