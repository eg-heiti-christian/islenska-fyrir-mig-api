import { isNumber } from 'lodash';
export class BaseRepository<T> {

    private model: any;
    constructor(model: any) {
        this.model = model;
    }

    async getAll(skip?: number, take?: number) {
        if (isNumber(skip) && isNumber(take)) {
            return await this.model.findMany({
                skip: skip,
                take: take,
            });
        } else {
            return await this.model.findMany();
        }
        
    }

    async getById(id: number) {
        return await this.model.findUnique({
            where: {
                id: id
            }
        });
    }

    async create(object: T) {
        return await this.model.create({
            data: {
                ...object
            },
        })
    }

    async update(id: number, object: T) {
        return await this.model.update({
            where: {
                id: id,
            },
            data: {
                ...object
            }
        });          
    }

    async delete(id: number) {
        return await this.model.delete({
            where: {
                id: id
            }
        });
    }
}