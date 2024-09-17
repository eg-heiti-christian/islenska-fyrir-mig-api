import { BaseRepository } from './base-repository';
import prisma from './client';

export interface IVerb {
    id?: number;
    singularFirstPerson: string;
    singularSecondPerson: string;
    singularThirdPerson: string;
    pluralFirstPerson: string;
    pluralSecondPerson: string;
    pluralThirdPerson: string;
}
export class VerbRepository extends BaseRepository<IVerb> {
    constructor() {
        super(prisma.verb);
    }
}