const elementsMocks = require('../utils/mocks/elements');
const MongoLib = require('../lib/mongo')

class HomeService {
    constructor() {
        this.collection = 'web_home';
        this.mongoDB = new MongoLib();
    }

    async getElements({ tags }) {
        const query = tags && {tags: {$in: tags}};
        const elements = await this.mongoDB.getAll(this.collection, query);
        return elements || [];
    }

    getElement({ elementId }) {
        return Promise.resolve(elementsMocks[0]);
    }

    createElement({ element }) {
        return Promise.resolve(elementsMocks[0]);
    }

    updateElement({ elementId, element }) {
        return Promise.resolve(elementsMocks[0]);
    }

    deleteElement({ elementId }) {
        return Promise.resolve(elementsMocks[0]);
    }
}

module.exports = HomeService;