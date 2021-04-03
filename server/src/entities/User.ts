import { Field, ObjectType } from "type-graphql";
import { 
    BaseEntity, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;
}