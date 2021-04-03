import { 
    Arg,
    Ctx,
    Mutation,
    Resolver,
    Subscription
} from "type-graphql";
import { getConnection } from 'typeorm';
import { User } from "../entities/User";
import { GraphQLUpload, MyContext, Upload } from "../types";
import { createWriteStream } from 'fs';

@Resolver(User)
export class UserResolver {
    @Mutation(() => Boolean)
    async register(
        @Arg('username') username: string
    ) : Promise<boolean> {
        await getConnection().query(
            `
                insert into user (username)
                values ($1)
            `, [username]
        );

        return true;
    }

    @Mutation(() => Boolean)
    uploadFile(
        @Arg('file', () => GraphQLUpload) { createReadStream , filename }: Upload
    ) {
        return new Promise(async (resolve, reject) => 
            createReadStream()
                .pipe(createWriteStream(filename))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        )
    }

    @Subscription(() => Boolean, { 
        topics: 'cool_event',
        filter: ({ context, payload } : any) => {
            const { req } = context.connection.context;
            context.req = req; //now you can use req object in function below

            console.log(payload);
        
            return true;
        }
    })
    coolEvent(
        @Ctx() { req } : MyContext 
    ): boolean {
        console.log(typeof req);
        return true;
    }
}