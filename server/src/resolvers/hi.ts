import { MyContext } from "src/types";
import { 
    Ctx,
    PubSub, 
    PubSubEngine, 
    Query, 
    Resolver, 
    Subscription
} from "type-graphql";

@Resolver() 
export class HiResolver {
    @Query(() => String)
    async hi(
        @PubSub() pubsub: PubSubEngine
    ): Promise<string> {
        await pubsub.publish('cool_event' , {});
        return 'hi';
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