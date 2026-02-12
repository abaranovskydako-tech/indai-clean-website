import { NextRequest, NextResponse } from 'next/server';

// Deferred: File upload implementation (MASTER_SPEC §11.1, §16)
// Dependencies: S3 client (lib/s3.ts), file validation, size limits
// This scaffold establishes the route. Logic will be added when Upload System is implemented.

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Not implemented', message: 'File upload API is not yet active.' },
    { status: 501 }
  );
}
