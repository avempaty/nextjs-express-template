/*
Table template schema to represent DB
Used for in-memory storage 
*/
export default class Table {
    constructor(name) {
        this.name = name
    }

    create(data) {
        throw new Error("not implemented")
    }
    update(data) {
        throw new Error("not implemented")
    }
    delete(id) {
        throw new Error("not implemented")
    }
    get(id) {
        throw new Error("not implemented")
    }

} 