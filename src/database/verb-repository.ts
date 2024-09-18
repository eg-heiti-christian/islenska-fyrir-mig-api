import { IVerb } from '../models/database/IVerb';
import { BaseRepository } from './base-repository';
import prisma from './client';


export class VerbRepository extends BaseRepository<IVerb> {
    constructor() {
        super(prisma.verb);
    }
}