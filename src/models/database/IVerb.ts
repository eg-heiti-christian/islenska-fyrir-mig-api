import { IBaseType } from "./IBaseType";
import { IVerbConjugation } from "./IVerbConjugation";

export interface IVerb extends IBaseType {
    nominative: string;
    presentTense?: IVerbConjugation
}