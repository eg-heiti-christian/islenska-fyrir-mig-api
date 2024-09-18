import { IVerbConjugation } from '../models/database/IVerbConjugation';
import { BaseRepository } from './base-repository';
import prisma from './client';


export class VerbPresentTenseRepository extends BaseRepository<IVerbConjugation> {
    constructor() {
        super(prisma.verbPresentTense);
    }
}