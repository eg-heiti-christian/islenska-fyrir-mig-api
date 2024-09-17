
export class BaseRepository<T> {

    model: any;
    constructor(model: any) {
        this.model = model;
    }

    async create(object: T) {
        return await this.model.create({
            data: {
                ...object
            },
        })
    }
}