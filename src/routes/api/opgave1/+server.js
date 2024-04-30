import { PrismaClient } from '@prisma/client';

export async function POST({ request }) {
    const { opgaveId, svarliste } = await request.json();
    console.log(svarliste);
    const prisma = new PrismaClient();
    const data = svarliste.map((svar) => {
        return { questionno: svar.id, answer: svar.answer, authorId: request.user.id, opgaveId: opgaveId };
    });
    await prisma.answer.createMany({
        data: data
    });

    return new Response("Ok", { status: 201 });
}

export async function GET() {
    const prisma = new PrismaClient();
    const answers = await prisma.answer.findMany({
        orderBy: { id: 'desc' }, // Sorterer efter id i faldende rækkefølge
        take: 2 // Tager de to seneste svar
    });
    return new Response(JSON.stringify(answers), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

