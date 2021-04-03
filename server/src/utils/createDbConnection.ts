import { createConnection } from 'typeorm';
import { User } from '../entities/User';

export const createDbConnection = async () => {
    await createConnection({
        type: 'postgres',
        url: process.env.DB_URL,
        synchronize: true,
        logging: true,
        entities: [
            User
        ] 
    });

}