import { IVerbConjugation } from '../models/database/IVerbConjugation';
import { BaseRepository } from './base-repository';
import prisma from './client';


export class VerbPastTenseRepository extends BaseRepository<IVerbConjugation> {
    constructor() {
        super(prisma.verbPastTense);
    }
}