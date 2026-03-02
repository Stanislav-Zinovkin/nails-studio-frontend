import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const { name, phone, service,date,time} = data;

        console.log(`New book :
            client: ${name}
            phone: ${phone}
            service: ${service}
            date: ${date}
            time: ${time}`);

            return NextResponse.json({
                success: true,
                message: "Book approved!"
            });
    } catch (error) {
        return NextResponse.json({ success: false }, {status: 500});
    }
    
}