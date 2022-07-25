const {MongoCliente, MongoClient} = require('mongodb');
const {config} = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

//const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=${DB_NAME}`
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/?retryWrites=true&w=majority`


class MongoLib  {

    constructor(){
        console.log('MONGO_URI ', MONGO_URI)
        this.client = new MongoClient(MONGO_URI, {useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,});
        this.dbName = config.dbName;
    }

    connect() {
        return new Promise((resolve, reject) => {
          this.client.connect(error => {
            if (error) {
              reject(error);
            }
    
            console.log("Connected succesfully to mongo");
            resolve(this.client.db(this.dbName));
          });
        });
      }

    getAll(collection, query){
        return this.connect().then(db => {
            return db
             .collection(collection)
             .find(query)
             .toArray()
        })
    }
}


module.exports = MongoLib;



