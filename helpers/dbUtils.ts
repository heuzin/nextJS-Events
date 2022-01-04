import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
    const client = await MongoClient.connect(process.env.DB_HOST as string);
    return client;
};

export const insertDocument = async (client: MongoClient, collection: string, document: any) => {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);

    return result;
};

export const getAllDocuments = async (client: MongoClient, collection: string, findBy: any, sort: any) => {
    const db = client.db();

    const documents = await db.collection(collection).find(findBy).sort(sort).toArray();

    return documents;
};
