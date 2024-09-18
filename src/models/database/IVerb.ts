import { IBaseType } from "./IBaseType";
import { IVerbConjugation } from "./IVerbConjugation";
import { Prisma } from "@prisma/client";

export interface IVerb extends IBaseType {
    infinitive: string;
    presentTense?: IVerbConjugation
}