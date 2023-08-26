import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"

export async function appRoutes(app: FastifyInstance) {
    app.get('/teste', async (request) => {
        const teste = prisma.cardType.create({
            data: { name: 'teste' }
        })

        return teste;
    })
}
