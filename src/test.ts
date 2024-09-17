import { VerbRepository, IVerb } from "./database/verb-repository"

async function main() {
  const verb: IVerb = {
    singularFirstPerson: 'á',
    singularSecondPerson: 'átt',
    singularThirdPerson: 'á',
    pluralFirstPerson: 'eigum',
    pluralSecondPerson: 'eigið',
    pluralThirdPerson: 'eiga'
  }

  const verbRepository = new VerbRepository();
  await verbRepository.create(verb);
}

main()

