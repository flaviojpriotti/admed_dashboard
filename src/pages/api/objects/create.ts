import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, value } = req.body;

    try {
        const newObject = await prisma.object.create({
            data: {
                name,
                value,
            },
        });

        return res.status(201).json(newObject);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
