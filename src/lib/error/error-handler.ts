import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export function handleApiError(error: unknown) {

    console.error("[SERVER ERROR]:", error);

    if (error instanceof ZodError) {
        return NextResponse.json({ 
            error: "VALIDATION_ERROR", 
            details: error.format() 
        }, { status: 400 });
    }


    if (error instanceof Prisma.PrismaClientKnownRequestError) {

        const prismaErrors: Record<string, string> = {
            P2002: "DUPLICATE_ENTRY",
            P2025: "RECORD_NOT_FOUND",
        };
        return NextResponse.json({ 
            error: prismaErrors[error.code] || "DATABASE_ERROR" 
        }, { status: 400 });
    }

    // 3. Все інше
    return NextResponse.json({ 
        error: "INTERNAL_SERVER_ERROR" 
    }, { status: 500 });
}