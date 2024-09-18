import { Prisma } from '@prisma/client'
import prisma from '../database/client'

const verbData: Prisma.VerbCreateInput[] = [
    {
        infinitive: '',
        presentTense: {
            create: {
                singularFirstPerson: '',
                singularSecondPerson: '',
                singularThirdPerson: '',
                pluralFirstPerson: '',
                pluralSecondPerson: '',
                pluralThirdPerson: '',
            },
        },
        pastTense: {
            create: {
                singularFirstPerson: '',
                singularSecondPerson: '',
                singularThirdPerson: '',
                pluralFirstPerson: '',
                pluralSecondPerson: '',
                pluralThirdPerson: '',
            },
        },
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const v of verbData) {
        const verb = await prisma.verb.create({
            data: v,
        })
        console.log(`Created verb with id: ${verb.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })