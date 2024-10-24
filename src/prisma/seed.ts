import { Prisma } from '@prisma/client'
import prisma from '../database/client'

// generated from python script
import { verb_inflections } from './verb_inflections'

interface VerbInflections {
    [infinitive: string]: {
        present_tense: {
            singularFirstPerson: string;
            singularSecondPerson: string;
            singularThirdPerson: string;
            pluralFirstPerson: string;
            pluralSecondPerson: string;
            pluralThirdPerson: string;
        },
        past_tense: {
            singularFirstPerson: string;
            singularSecondPerson: string;
            singularThirdPerson: string;
            pluralFirstPerson: string;
            pluralSecondPerson: string;
            pluralThirdPerson: string;
        }
    }
}

const verbData: Prisma.VerbCreateInput[] = [];
const verbInflections = verb_inflections as VerbInflections; 
for (let infinitive in verbInflections) {
    const verb: Prisma.VerbCreateInput = {
        infinitive: `að ${infinitive}`,
        presentTense: {
            create: {
                singularFirstPerson: verbInflections[infinitive].present_tense.singularFirstPerson,
                singularSecondPerson: verbInflections[infinitive].present_tense.singularSecondPerson,
                singularThirdPerson: verbInflections[infinitive].present_tense.singularThirdPerson,
                pluralFirstPerson: verbInflections[infinitive].present_tense.pluralFirstPerson,
                pluralSecondPerson: verbInflections[infinitive].present_tense.pluralSecondPerson,
                pluralThirdPerson: verbInflections[infinitive].present_tense.pluralThirdPerson,
            },
        },
        pastTense: {
            create: {
                singularFirstPerson: verbInflections[infinitive].past_tense.singularFirstPerson,
                singularSecondPerson: verbInflections[infinitive].past_tense.singularSecondPerson,
                singularThirdPerson: verbInflections[infinitive].past_tense.singularThirdPerson,
                pluralFirstPerson: verbInflections[infinitive].past_tense.pluralFirstPerson,
                pluralSecondPerson: verbInflections[infinitive].past_tense.pluralSecondPerson,
                pluralThirdPerson: verbInflections[infinitive].past_tense.pluralThirdPerson,
            },
        },
    }
    verbData.push(verb);
}

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