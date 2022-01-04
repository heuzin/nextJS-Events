import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import { connectDatabase, getAllDocuments, insertDocument } from '../../../helpers/dbUtils';

type IComments = {
    email: string;
    name: string;
    text: string;
    eventId: string | string[];
    _id?: ObjectId;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const eventId = req.query.eventId;

    let client: MongoClient;

    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' });
            client.close();
            return;
        }

        const newComment: IComments = {
            email,
            name,
            text,
            eventId,
        };

        try {
            const result = await insertDocument(client, 'comments', newComment);

            newComment._id = result.insertedId;

            res.status(201).json({ message: 'Added comment.', comment: newComment });
        } catch (error) {
            res.status(500).json({ message: 'Inserting comment failed ' });
        }
    }

    if (req.method === 'GET') {
        try {
            const documents = await getAllDocuments(client, 'comments', { eventId: eventId }, { _id: -1 });
            res.status(200).json({ comments: documents });
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failed.' });
        }
    }

    client.close();
};

export default handler;
