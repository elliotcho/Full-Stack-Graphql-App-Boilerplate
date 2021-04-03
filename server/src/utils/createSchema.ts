import { buildSchema } from 'type-graphql';
import { UserResolver } from '../resolvers/user';
import { HiResolver } from '../resolvers/hi';

export const createSchema = async () => (
    await buildSchema({
        validate: false,
        resolvers: [
            UserResolver,
            HiResolver
        ]   
    })
);