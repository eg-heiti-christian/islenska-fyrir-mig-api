import { VerbRepository } from "../database/verb-repository";

export const GetAll = async () => {

    const verbRepository = new VerbRepository();
    const verbs = await verbRepository.getAll();
    return verbs;
}