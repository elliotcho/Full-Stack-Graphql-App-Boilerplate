import { 
    Arg,
    Ctx,
    Mutation,
    PubSub, 
    PubSubEngine, 
    Query, 
    Resolver, 
    Subscription
} from "type-graphql";
import { GraphQLUpload, MyContext, Upload } from "../types";
import { createWriteStream } from "fs";
import path from 'path';

@Resolver() 
export class HiResolver {
    @Query(() => String)
    async hi(
        @PubSub() pubsub: PubSubEngine
    ): Promise<string> {
        await pubsub.publish('cool_event' , {});
        return 'hi';
    }

    @Mutation(() => Boolean)
    async uploadFile(
        @Arg('file', () => GraphQLUpload) { createReadStream, filename} : Upload
    ) : Promise<boolean> {
        return new Promise(async (resolve, reject) =>
            createReadStream()
                .pipe(createWriteStream(path.join(__dirname, `../../images/${filename}`)))
                .on('finish', () => resolve(true))
                .on('error', () => reject(false))
        );
    }

    @Subscription(() => Boolean, { 
        topics: 'cool_event',
        filter: ({ context, payload } : any) => {
            const { req } = context.connection.context; //get req object from your connection
            context.req = req; //set req object in your context to the one from your connection

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